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
  materia: FiFileMinus,
  email: FiMail,
  ads: FiDollarSign,
  evento: FiCalendar,
  comunicado: FiMessageCircle,
};

export default CardTypesMapper;
