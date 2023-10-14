'use client'
 


import Quill from "quill";
import ImageUploader from "quill-image-uploader";

Quill.register("modules/imageUploader", ImageUploader);

const quill = new Quill(editor, {
  modules: {
    imageUploader: {
      upload: (file) => {
        // Your code to upload the image to the server
        // Once the image is uploaded, return the URL of the image
      },
    },
  },
});

quill.on("text-change", () => {
  // Enable the image upload button if the cursor is at the beginning of a line
  const range = quill.getSelection();
  const isAtBeginningOfLine = range.start === range.end && range.start === 0;
  quill.uploader.enable(isAtBeginningOfLine);
});

quill.uploader.on("upload-success", (url) => {
  // The image has been uploaded successfully
  quill.insertEmbed(range, "image", url);
});

export default function Test() {
    return (
            <main className="w-full h-full">

            </main>
  );
}