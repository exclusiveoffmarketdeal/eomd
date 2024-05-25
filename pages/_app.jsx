import '@/styles/globals.css'
import 'swiper/css'
import 'swiper/css/pagination'
import Nav from '@/components/Menu/Nav/NavContainer'
import PageContainer from '@/components/Hardware/Containers/PageContainer'
import Footer from '@/components/Menu/Footer/FooterContainer'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
// import { AppInsightsContext } from '@microsoft/applicationinsights-react-js'
// import { reactPlugin } from '../ApplicationInsightsService'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { AuthProvider } from '@/components/AuthProvider'

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_APOLLOCLIENT_URI,
  cache: new InMemoryCache(),
})

const App = ({ Component, pageProps }) => {
  return (
    <>
      <AuthProvider>
        <ApolloProvider client={client}>
          <div className='flex flex-col justify-between w-full h-screen'>
            <Nav />
            <PageContainer>
              {/* <AppInsightsContext.Provider value={reactPlugin}> */}
              <Component {...pageProps} />
              <ToastContainer
                position='top-right'
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
              {/* </AppInsightsContext.Provider> */}
            </PageContainer>
            <Footer />
          </div>
        </ApolloProvider>
      </AuthProvider>
    </>
  )
}

export default App
