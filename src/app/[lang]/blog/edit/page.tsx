'use client';
import axios from 'axios';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { Locale } from '@/i18n.config';
import dynamic from 'next/dynamic';
import PageTitle from '@/components/page-title';
import { Button } from '@/components/ui/button';
import { UploadMetadata, getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { db, storage } from '@/firebase/firebase-app';
import { addDoc, collection } from 'firebase/firestore';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import { metadata } from '@/components/text-editor';
import toast from 'react-hot-toast';

export default function EditBlog({ params: { lang } }: { params: { lang: Locale } }) {
    const searchParams = useSearchParams();
    const key = searchParams.get('key');
    const slug = searchParams.get('title');
    const [title, setTitle] = useState<string>('');
    const [validated, setValidated] = useState(true);
    const [cover, setCover] = useState<{ url: string; file: File }>();
    const router = useRouter();
    const [value, setValue] = useState('');
    const [display, setDisplay] = useState(false);
    const TextEditor = useMemo(() => dynamic(() => import('@/components/text-editor'), { ssr: false }), []);
    useEffect(() => {
        async function confirmKey() {
            const res = await axios.get('/api/edit/?key=' + key + '&title=' + slug);
            if (res.data?.error) {
                router.push('/blog');
            } else {
                setDisplay(true);
            }
        }
        confirmKey();
    });
    const handlePostBlog = async () => {
        if (!value || !cover || !title) {
            setValidated(false);
            return;
        }
        // const res = await toast.promise(
        const res = await toast.promise(
            new Promise((resolve, reject) => {
                const storageRef = ref(storage, `images/${cover.file.name}`);
                const uploadTask = uploadBytesResumable(storageRef, cover.file, metadata.contentType as UploadMetadata);

                uploadTask.on(
                    'state_changed',
                    (snapshot) => {
                        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                        // const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        // console.log('Upload is ' + progress + '% done');
                        // switch (snapshot.state) {
                        //   case 'paused':
                        //     console.log('Upload is paused');
                        //     break;
                        //   case 'running':
                        //     console.log('Upload is running');
                        //     break;
                        // }
                    },
                    (error) => {
                        reject(error);
                    },
                    async () => {
                        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                        resolve(downloadURL); // resolve the Promise with the downloaded URL
                    },
                );
            }),
            {
                loading: <p>{lang === 'vi' ? 'Xin hãy đợi 1 chút' : 'Please wait for a moment'}</p>,
                success: (data) => {
                    return <p> {lang === 'vi' ? 'Ảnh bìa đã up' : 'Cover has been uploaded'}</p>;
                },
                error: 'Error while sending form',
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
        await addDoc(collection(db, 'blogs'), {
            title: title,
            content: value,
            date: new Date(),
            cover: res,
        });
    };
    const handleImagePreview = (e) => {
        const file = e.target.files[0];
        setCover({ url: URL.createObjectURL(file), file: file });
    };
    return (
        <>
            {display && (
                <main className="flex h-fit w-full flex-col items-center gap-y-10 py-20">
                    <PageTitle
                        src="https://firebasestorage.googleapis.com/v0/b/hub-media-207ea.appspot.com/o/images%2Fbghub.JPG?alt=media&token=07da7fd8-9f51-479c-848a-691c6972c227&_gl=1*3zs0og*_ga*MjEzMTY3MzA4MS4xNjkxMzM2Nzk5*_ga_CW55HF8NVT*MTY5Njc0OTk2NC4yODMuMS4xNjk2NzUxNzE1LjQ0LjAuMA."
                        title="Edit Blog"
                    />
                    <section className="mt-10 flex w-2/3 gap-x-8">
                        <Input
                            type="text"
                            className="text-2xl  font-bold "
                            value={title}
                            placeholder="Enter title"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <Button
                            className="w-1/3  cursor-pointer font-bold"
                            variant={validated ? 'default' : 'destructive'}
                        >
                            <label htmlFor="cover" className="w-full cursor-pointer">
                                Choose Cover
                            </label>
                        </Button>
                        <Input
                            type="file"
                            className="hidden"
                            id="cover"
                            accept="image/*"
                            onChange={handleImagePreview}
                        />
                    </section>
                    {cover && (
                        <div className="aspect-[3/2] w-1/3 overflow-hidden">
                            {' '}
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
                    <TextEditor value={value} setValue={setValue} validated={validated} />

                    <Button onClick={handlePostBlog} size={'lg'} className="text-lg font-bold">
                        Post
                    </Button>
                </main>
            )}
        </>
    );
}
