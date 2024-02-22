import { WebView } from 'react-native-webview'

export default function ArticlePage() {
	return <WebView source={{ uri: 'https://www.google.com' }} />
}
