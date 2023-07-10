import Header from '../components/Header'
import Footer from '../components/Footer'

interface LayoutProps {
  children?: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='flex flex-col justify-between min-h-screen'>
      <div className='container'>
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  )
}
