'use client';
import 'react-quill/dist/quill.snow.css';
import 'quill-image-uploader/dist/quill.imageUploader.min.css';
import { UploadMetadata, getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '@/firebase/firebase-app';
import dynamic from 'next/dynamic';
import { useMemo } from 'react';
import { Quill } from 'react-quill';
import ImageUploader from 'quill-image-uploader';
import ImageResize from 'quill-image-resize-module-react';

Quill.register('modules/imageUploader', ImageUploader);
Quill.register('modules/imageResize', ImageResize);

export const metadata = {
    contentType: 'image/*',
};

const modules = {
    toolbar: [
        [{ size: [] }],
        [{ header: [1, 2, 3, 4, 5, false] }, 'bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
        [
            {
                color: [
                    '#111111',
                    '#FF0000',
                    '#d9658c',
                    '#001F3F',
                    '#0074D9',
                    '#7FDBFF',
                    '#39CCCC',
                    '#3D9970',
                    '#2ECC40',
                    '#01FF70',
                    '#FFDC00',
                    '#FF851B',
                    '#FF4136',
                    '#85144B',
                    '#F012BE',
                    '#B10DC9',
                    '#AAAAAA',
                ],
            },
            {
                background: [
                    'transparent',
                    '#111111',
                    '#FF0000',
                    '#d9658c',
                    '#001F3F',
                    '#0074D9',
                    '#7FDBFF',
                    '#39CCCC',
                    '#3D9970',
                    '#2ECC40',
                    '#01FF70',
                    '#FFDC00',
                    '#FF851B',
                    '#FF4136',
                    '#85144B',
                    '#F012BE',
                    '#B10DC9',
                    '#AAAAAA',
                ],
            },
        ],
        ['link', 'image', 'code-block'],
        ['clean'],
    ],
    clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false,
    },
    imageResize: {
        displaySize: true,
        parchment: Quill.import('parchment'),
        modules: ['Resize', 'DisplaySize', 'Toolbar'],
    },
    imageUploader: {
        upload: (file) => {
            return new Promise((resolve, reject) => {
                const storageRef = ref(storage, `images/${file.name}`);
                const uploadTask = uploadBytesResumable(storageRef, file, metadata.contentType as UploadMetadata);

                uploadTask.on(
                    'state_changed',
                    (snapshot) => {},
                    (error) => {
                        reject(error);
                    },
                    async () => {
                        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                        resolve(downloadURL); // resolve the Promise with the downloaded URL
                    },
                );
            });
        },
    },
};

const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'code-block',
    'background',
    'image',
    'video',
    'color',
    'imageBlot',
];

export default function TextEditor({
    value,
    setValue,
    validated,
    defaultValue,
    required,
}: {
    value: string;
    setValue: (value: string) => void;
    validated: boolean;
    defaultValue?: string;
    required?: boolean;
}) {
    const ReactQuill = useMemo(() => dynamic(() => import('react-quill'), { ssr: false }), []);

    return (
        <section className="w-[70%]  p-1   px-2  text-white placeholder:text-white">
            <ReactQuill
                theme="snow"
                value={value}
                style={{
                    height: '800px',
                    marginBottom: '80px',
                    borderColor: validated ? 'white' : 'red !important',
                }}
                className={!validated ? ' invalid' : ' '}
                onChange={setValue}
                modules={modules}
                formats={formats}
                placeholder={validated ? 'Describe everything about your project' : 'This field is required'}
            />
        </section>
    );
}
