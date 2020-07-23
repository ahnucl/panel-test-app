import { IconType } from 'react-icons';
import {
  FiVideo,
  FiFileMinus,
  FiVolume2,
  FiMail,
  FiDollarSign,
  FiCalendar,
  FiMessageCircle,
} from 'react-icons/fi';

const CardTypesMapper: { [index: string]: IconType } = {
  video: FiVideo,
  audio: FiVolume2,
  theme: FiFileMinus,
  email: FiMail,
  ad: FiDollarSign,
  event: FiCalendar,
  handout: FiMessageCircle,
};

export default CardTypesMapper;
