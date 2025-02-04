import Header from './Header'
import Footer from './Footer'
import PropTypes from 'prop-types';
const PageLayout = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}
PageLayout.propTypes = {
    children: PropTypes.node,  
};


export default PageLayout