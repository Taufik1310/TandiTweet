import { HelmetProvider, Helmet } from "react-helmet-async"
import Auth from "../pages/Auth"

const Index = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <link rel="shortcut icon" href="../../img/tanditweet_logo2_white.png" type="image/x-icon" />
                <title>TandiTweet for Web</title>
            </Helmet>
            <main>
                <Auth />
            </main>
        </HelmetProvider>
    )
}

export default Index