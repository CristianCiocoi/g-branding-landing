import HomePage from "./HomePage";
import { homeMetadata } from "./page.metadata";

// Export the metadata from this server component
export const metadata = homeMetadata;

// Export the client component as the default component
export default function Page() {
  return <HomePage />;
}
