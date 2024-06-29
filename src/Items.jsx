import { useQuery } from '@tanstack/react-query'
import SingleItem from './SingleItem'
import customFetch from './utils'
const Items = () => {
  const { isLoading, data, isError } = useQuery({
    queryKey: ['tasks'],
    queryFn: () => customFetch('/'),
  })

  if (isLoading) {
    return <p style={{ marginTop: '1rem' }}>LOADING...</p>
  }

  if (isError) {
    return <p style={{ marginTop: '1rem' }}>Something went wrong...</p>
  }

  return (
    <div className='items'>
      {data.data.taskList.map((item) => {
        return <SingleItem key={item.id} item={item} />
      })}
    </div>
  )
}
export default Items
