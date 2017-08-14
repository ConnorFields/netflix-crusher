/**
 *  Data model for video details
 */

export class Video {

  title: string;
  description: string;
  type: string;
  contents: VideoContents[];
  id: string;
  isSelected?: boolean;
}

//Class to drill down into contents for needed attributes
export class VideoContents {

    url: string;
    width: number;
    height: number;
    duration: number;
}