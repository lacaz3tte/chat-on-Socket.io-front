import { useContext } from 'react';
import { ChatContext } from '../chatContext';
import { getTime } from '../../massage/getTime';
import { IData } from '../../pages/interfaces';


interface IDataTransfer {
  login: string
  message: IData
}

const ChatAccount = ({ login, message }: IDataTransfer) => {

  const chatContext = useContext(ChatContext)

  return (
    <div
      className='m-2 p-2 text-h2 hover:text-h1 rounded-xl hover:bg-h4 dark:text-hd2 dark:hover:text-hd1 dark:hover:bg-hd4 hover:cursor-pointer transition-all'
      onClick={() => {
        chatContext.moveToChat(login)
      }}
    >
      <div className='flex justify-between'>
        <p className='underline font-bold'>{login}</p>
        <p className='text-xs'> {getTime(message.date)} </p>
      </div>
        <p className='w-full overflow-hidden whitespace-nowrap text-ellipsis inline-block'>{message.msg}</p>
    </div>
  )
}

export default ChatAccount