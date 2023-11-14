'use client';
import axios from 'axios';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { Locale } from '@/i18n.config';
import dynamic from 'next/dynamic';
import PageTitle from '@/components/page-title';
import { Button } from '@/components/ui/button';
import { db } from '@/firebase/firebase-app';
import { addDoc, collection, deleteDoc, doc, getDoc, updateDoc } from 'firebase/firestore';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import toast from 'react-hot-toast';
import Loading from '@/app/[lang]/loading';

export default function EditBlog({ params: { lang } }: { params: { lang: Locale } }) {
    const searchParams = useSearchParams();
    const key = searchParams.get('key');
    const id = searchParams.get('id');
    const [title, setTitle] = useState<string>('');
    const [contentId, setContentId] = useState<string>('');
    const [validated, setValidated] = useState(true);
    const [cover, setCover] = useState<{ url: string; file?: File }>();
    const router = useRouter();
    const [defaultContent, setDefaultContent] = useState('');
    const [value, setValue] = useState('');
    const [displayDelete, setDisplayDelete] = useState(false);
    const [display, setDisplay] = useState(false);
    const TextEditor = useMemo(() => dynamic(() => import('@/components/text-editor'), { ssr: false }), []);
    useEffect(() => {
        async function confirmKey() {
            const res = await axios.get('/api/edit/?key=' + key + '&id=' + id);
            if (res.data?.error) {
                router.push('/blog');
            } else {
                setDisplay(true);
                if (id) {
                    const res = await getDoc(doc(db, 'contents', id));
                    const data = res.data();

                    if (data) {
                        setTitle(data.title);
                        setDefaultContent(data.content);
                        setValue(data.content);
                        setCover({ url: data.cover });
                        setDisplayDelete(true);
                        setContentId(data.blogId);
                    }
                }
            }
        }
        confirmKey();
    }, []);
    const handlePostBlog = async () => {
        if (!value || !cover || !title) {
            setValidated(false);
            return;
        }
        // const res = await toast.promise(
        await toast.promise(
            new Promise((resolve, reject) => {
                (async () => {
                    let file: any = cover.file;
                    let cover_url = cover.url;
                    if (cover.file) {
                        file = new FormData();
                        file.append('file', cover.file);
                        const res = await axios.post('/api/upload', file);
                        cover_url = res.data;
                    }
                    const textWithoutStrongTags = value.replace(/<strong[^>]*>.*?<\/strong>/g, '');

                    const textContent = textWithoutStrongTags.replace(/<[^>]*>/g, '');

                    // Split the text into words
                    const words = textContent.split(/\s+/);

                    // Extract the first 20 words
                    const first20Words = words.slice(0, 20).join(' ');
                    if (contentId && id) {
                        const res = await updateDoc(doc(db, 'contents', id), {
                            title: title,
                            content: value,
                            date: new Date(),
                            cover: cover_url,
                        });
                        const result = await updateDoc(doc(db, 'blogs', contentId), {
                            title: title,
                            cover: cover_url,
                            date: new Date(),
                            preview: first20Words,
                        });
                    } else {
                        const docRef = await addDoc(collection(db, 'contents'), {
                            title: title,
                            content: value,
                            date: new Date(),
                            cover: cover_url,
                        });
                        const result = await addDoc(collection(db, 'blogs'), {
                            contentId: docRef.id,
                            title: title,
                            cover: cover_url,
                            date: new Date(),
                            preview: first20Words,
                        });
                        const res = await updateDoc(doc(db, 'contents', docRef.id), {
                            blogId: result.id,
                        });
                    }

                    resolve('ok');
                })();
            }),
            {
                loading: <p>{lang === 'vi' ? 'Xin hãy đợi 1 chút' : 'Please wait for a moment'}</p>,
                success: (data) => {
                    return <p> {lang === 'vi' ? 'Blog đã được đăng' : 'Blog has been uploaded'}</p>;
                },
                error: 'Error while posting blog',
            },
            {
                style: {
                    minWidth: '200px',
                    minHeight: '50px',
                    fontSize: '16px',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
                    background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1))',
                    color: 'var(--gradient)',
                },
                success: {
                    duration: 3000,
                    icon: '✅',
                },
                error: {
                    duration: 3000,
                    icon: '❌',
                    style: {
                        minWidth: '250px',
                        minHeight: '60px',
                        fontSize: '20px',
                        backgroundColor: 'var(--primary)',
                        color: 'red',
                    },
                },
            },
        );
        reset();
    };
    const reset = () => {
        setCover(undefined);
        setTitle('');
        setValue('');
        setDisplayDelete(false);
        setValidated(true);
    };
    const handleImagePreview = (e) => {
        const file = e.target.files[0];
        setCover({ url: URL.createObjectURL(file), file: file });
    };
    const handleDelete = async () => {
        if (id) {
            await toast.promise(
                new Promise((resolve, reject) => {
                    (async () => {
                        await deleteDoc(doc(db, 'contents', id));
                        await deleteDoc(doc(db, 'blogs', contentId));
                    })();
                    reset();
                    const recentPosts = localStorage.getItem('recentpost')
                        ? JSON.parse(localStorage.getItem('recentpost') as string)
                        : [];
                    if (recentPosts.length > 0) {
                        const newRecentPosts = recentPosts.filter(
                            (item: { contentId: string }) => item.contentId !== id,
                        );
                        localStorage.setItem('recentpost', JSON.stringify(newRecentPosts));
                    }
                    resolve('ok');
                    router.push('/blog');
                }),
                {
                    loading: <p>{lang === 'vi' ? 'Xin hãy đợi 1 chút' : 'Please wait for a moment'}</p>,
                    success: (data) => {
                        return <p> {lang === 'vi' ? 'Xóa bài thành công' : 'Blog has been deleted'}</p>;
                    },
                    error: 'Error while delete blog',
                },
                {
                    style: {
                        minWidth: '200px',
                        minHeight: '50px',
                        fontSize: '16px',
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)',
                        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
                        background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1))',
                        color: 'var(--gradient)',
                    },
                    success: {
                        duration: 3000,
                        icon: '✅',
                    },
                    error: {
                        duration: 3000,
                        icon: '❌',
                        style: {
                            minWidth: '250px',
                            minHeight: '60px',
                            fontSize: '20px',
                            backgroundColor: 'var(--primary)',
                            color: 'red',
                        },
                    },
                },
            );
        }
    };
    return (
        <>
            {display ? (
                <main className="flex h-fit w-full flex-col items-center gap-y-10 py-[60px] md:py-[90px]">
                    <PageTitle
                        src="https://firebasestorage.googleapis.com/v0/b/hub-media-207ea.appspot.com/o/images%2Fbghub.JPG?alt=media&token=07da7fd8-9f51-479c-848a-691c6972c227&_gl=1*3zs0og*_ga*MjEzMTY3MzA4MS4xNjkxMzM2Nzk5*_ga_CW55HF8NVT*MTY5Njc0OTk2NC4yODMuMS4xNjk2NzUxNzE1LjQ0LjAuMA."
                        title="Edit Blog"
                    />
                    <section className=" flex w-full space-x-10 px-4 py-20 xl:space-x-20 xl:px-10 xl:py-0  2xl:space-x-32 2xl:px-20">
                        <div className="w-full flex-1 space-y-10">
                            <div className="mt-10 flex w-full gap-x-8">
                                <Input
                                    type="text"
                                    className="text-2xl  font-bold "
                                    value={title}
                                    placeholder="Enter title"
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                                <Button
                                    className="  cursor-pointer font-bold"
                                    variant={validated ? 'default' : 'destructive'}
                                >
                                    <label htmlFor="cover" className="w-full cursor-pointer">
                                        Cover
                                    </label>
                                </Button>
                                {displayDelete && (
                                    <Button
                                        className=" cursor-pointer font-bold"
                                        variant={validated ? 'default' : 'destructive'}
                                        onClick={handleDelete}
                                    >
                                        Delete
                                    </Button>
                                )}
                                <Input
                                    type="file"
                                    className="hidden"
                                    id="cover"
                                    accept="image/*"
                                    onChange={handleImagePreview}
                                />
                            </div>
                            {cover && (
                                <div className="aspect-[2/1] w-full overflow-hidden">
                                    <Image
                                        src={cover.url}
                                        width={0}
                                        height={0}
                                        sizes="100vw"
                                        alt="preview"
                                        className="w-full object-cover"
                                    />
                                </div>
                            )}
                            <TextEditor
                                value={value}
                                setValue={setValue}
                                validated={validated}
                                defaultValue={defaultContent}
                            />

                            <Button onClick={handlePostBlog} size={'lg'} className="text-lg font-bold">
                                Post
                            </Button>
                        </div>
                        <div className="hidden w-[400px] lg:block"></div>
                    </section>
                </main>
            ) : (
                <Loading />
            )}
        </>
    );
}
