import React from 'react';
import Footer from './Footer'; // Ensure Footer is correctly imported
import MoreNews from './MoreNews'; // Import MoreNews if it is in another file

function NewsPage() {
  return (
    <div>
      <MoreNews />
      <Footer />
    </div>
  );
}

export default NewsPage;
