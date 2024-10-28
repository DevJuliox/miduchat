import React from "react";

type VideoCardProps = {
  title: string;
  content: string;
  image: string;
  url: string;
};

const VideoCard: React.FC<VideoCardProps> = ({ title, content, image, url }) => {
  if (!title || !content || !image || !url) {
    return null;
  }

  return (
    <div className="flex flex-col bg-neutral-200 dark:bg-neutral-700 rounded-lg overflow-hidden mb-4 shadow-md">
      <img
        src={image}
        alt={title}
        className="w-full  object-cover"
      />
      <div className="p-2">
        <h3 className="text-base font-bold mb-2 text-neutral-900 dark:text-neutral-100">
          {title}
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-2">
          {content}
        </p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline text-sm"
        >
          Ver en YouTube
        </a>
      </div>
    </div>
  );
};

export default VideoCard;
