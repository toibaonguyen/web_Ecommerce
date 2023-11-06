import MainLayout from "@/components/Layouts/MainLayout";
import "../../styles/global.scss";
import ReduxProvider from "@/redux/provider";
export default function MyApp({ Component, pageProps }) {
  const getLayout =
    Component.getLayout || ((page) => <MainLayout>{page}</MainLayout>);
  return getLayout(
    <ReduxProvider>
      <Component {...pageProps} />
    </ReduxProvider>
  );
}
