import { PostLabel } from "../model/post-types";


interface PostLabelConfigProps {
  label: string;
  icon: string;
  background: string;
}

export const postLabelConfig: Record<PostLabel, PostLabelConfigProps> = {
  podcast: {
    label: 'Podcast',
    icon: '--icon-microphpne',
    background: '#fff'
  },
  video: {
    label: 'Video',
    icon: '--icon-circle-play',
    background: '#fff'
  },
  article: {
    label: 'Article',
    icon: '--icon-file',
    background: '#fff'
  }
}