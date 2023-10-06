import MainLayout from "@/components/Layouts/MainLayout";
import "../../styles/global.scss";
export default function MyApp({ Component, pageProps }) {
  const getLayout =
    Component.getLayout || ((page) => <MainLayout>{page}</MainLayout>);
  return getLayout(<Component {...pageProps} />);
}
