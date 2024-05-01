import { SyncLoader } from 'react-spinners'

/**
 * Simple loading.
 * 
 * @param {*} param0 
 * @returns 
 */
const Loading = ({ children, loadingState, itemLoading, size = 10 }) => {
  return (
    <>
      {loadingState ? (
        <div className='flex flex-row justify-center py-8 items-center w-full h-full'>
          Loading {itemLoading}
          <span className='ml-4'>
            <SyncLoader color={'#339b84'} size={size} speedMultiplier={0.8} />
          </span>
        </div>
      ) : (
        <>{children}</>
      )}
    </>
  )
}

export default Loading
