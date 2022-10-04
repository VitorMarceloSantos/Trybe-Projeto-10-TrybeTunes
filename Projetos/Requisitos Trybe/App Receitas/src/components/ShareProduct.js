import React, { useState } from 'react';
import clipboardCopy from 'clipboard-copy';

import { useHistory } from 'react-router';
import shareIcon from '../images/shareIcon.svg';

function ShareProduct() {
  const { location: { pathname } } = useHistory();
  const [message, setMessage] = useState(false);
  // const msgCopied = 'Link copied!';

  const handleClick = () => {
    setMessage(!message);
    const clipBoard = pathname.split('/in-progress');
    clipboardCopy(`http://localhost:3000${clipBoard[0]}`);
    console.log(`http://localhost:3000${clipBoard[0]}`);
  };

  return (
    <div>
      <div>
        <button
          type="button"
          onClick={ () => handleClick() }
          data-testid="share-btn"
        >
          <img
            src={ shareIcon }
            alt="Share Img"
            // data-testid={ `${index}-horizontal-share-btn` }
          />
        </button>
        {message && <p>Link copied!</p>}
      </div>
    </div>
  );
}

export default ShareProduct;
