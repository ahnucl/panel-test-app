import { IconType } from 'react-icons';
import {
  FiVideo,
  FiPaperclip,
  FiVolume2,
  FiMail,
  FiDollarSign,
} from 'react-icons/fi';

const CardTypesMapper: { [index: string]: IconType } = {
  video: FiVideo,
  audio: FiVolume2,
  paperclip: FiPaperclip,
  email: FiMail,
  ads: FiDollarSign,
};

export default CardTypesMapper;
