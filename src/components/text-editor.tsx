'use client';
import 'react-quill/dist/quill.snow.css';
import 'quill-image-uploader/dist/quill.imageUploader.min.css';
// import { UploadMetadata, getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import dynamic from 'next/dynamic';
import { useEffect, useMemo, useRef, useState } from 'react';
import axios from 'axios';
// import { Quill } from 'react-quill';
// import ImageUploader from 'quill-image-uploader';
// import ImageResize from 'quill-image-resize-module-react';

export const metadata = {
    contentType: 'image/*',
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
    'align',
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
    const [editorLoaded, setEditorLoaded] = useState(false);
    const ReactQuill = useMemo(() => dynamic(() => import('react-quill'), { ssr: false }), []);
    const modules = useRef<any>();
    useEffect(() => {
        (async () => {
            const quill = await import('react-quill');
            const ImageUploader = await import('quill-image-uploader');
            const ImageResize = await import('quill-image-resize-module-react');
            quill.default.Quill.register('modules/imageUploader', ImageUploader.default);
            quill.default.Quill.register('modules/imageResize', ImageResize.default);
            modules.current = {
                toolbar: [
                    [{ size: [] }],
                    [{ header: [1, 2, 3, 4, 5, false] }, 'bold', 'italic', 'underline', 'strike', 'blockquote'],
                    [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
                    [{ align: '' }, { align: 'center' }, { align: 'right' }, { align: 'justify' }],
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
                    parchment: quill.default.Quill.import('parchment'),
                    modules: ['Resize', 'DisplaySize', 'Toolbar'],
                },
                imageUploader: {
                    upload: (file) => {
                        const formData = new FormData();
                        formData.append('file', file);
                        return new Promise((resolve, reject) => {
                            axios
                                .post('/api/upload', formData)
                                .then((res) => {
                                   
                                    resolve(res.data);
                                })
                                .catch((err) => {
                                    reject(err);
                                });
                        });
                    },
                },
            };
            setEditorLoaded(true);
        })();
    }, []);

    return (
        <section className="w-full  text-white placeholder:text-white">
            {editorLoaded && (
                <ReactQuill
                    theme="snow"
                    value={value}
                    style={{
                        height: '700px',
                        marginBottom: '80px',
                        borderColor: validated ? 'white' : 'red !important',
                    }}
                    className={!validated ? ' invalid' : ' '}
                    onChange={setValue}
                    modules={modules.current}
                    formats={formats}
                    placeholder={validated ? 'Describe everything about your project' : 'This field is required'}
                />
            )}
        </section>
    );
}
