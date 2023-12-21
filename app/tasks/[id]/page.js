import Link from 'next/link'
import { getTask } from '@/utils/actions'
import EditForm from '@/components/EditForm'

const SingleTaskPage = async ({params}) => {
    const task = await getTask(params.id)
    console.log(task)
  return (
    <>
    <div className='mb-16'> 
    <Link href='/tasks' className="btn btn-accent">
        back to tasks
</Link>
<EditForm task={task} />

    </div>
    
    </>
  )
} 

export default SingleTaskPage



