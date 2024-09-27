import { useEffect, useState } from "react";
import { BuilderComponent, builder, useIsPreviewing } from "@builder.io/react";
import { useLocation } from 'react-router-dom'; // Import useLocation

// Initialize Builder with your API key
builder.init("0311cf39feae4899bf73680aba2631b5");

function FourOhFour() {
  return <h1>404 - Page Not Found</h1>;
}

export default function InspiringInnovations() {
  const isPreviewingInBuilder = useIsPreviewing();
  const [notFound, setNotFound] = useState(false);
  const [content, setContent] = useState(null);
  const location = useLocation(); // Get the current location

  // Fetch the page content from Builder
  useEffect(() => {
    async function fetchContent() {
      const content = await builder
        .get("page", {
          url: location.pathname // Use location.pathname instead
        })
        .promise();

      setContent(content);
      setNotFound(!content);

      // Set the document title if the page title is found
      if (content?.data.title) {
        document.title = content.data.title;
      }
    }
    fetchContent();
  }, [location.pathname]); // Update dependency to location.pathname

  // Return a 404 page if no content is found
  if (notFound && !isPreviewingInBuilder) {
    return <FourOhFour />;
  }

  // Render the Builder page when found
  return (
    <>
      <BuilderComponent model="page" content={content} />
    </>
  );
}
