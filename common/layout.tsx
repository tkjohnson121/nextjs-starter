import { css } from '@emotion/core';
import { pageTransition } from 'features/theme';
import { AnimatePresence, motion } from 'framer-motion';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { ReactNode } from 'react';
import Header from './header';

export const Layout = ({
  children,
  title = 'Nextjs-starter | A GVEMPIRE Product',
}: {
  children?: ReactNode;
  title?: string;
}) => {
  const router = useRouter();
  const menuRef = React.useRef<HTMLElement>(null);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header heightRef={menuRef} />

      <AnimatePresence exitBeforeEnter>
        <motion.main
          variants={pageTransition}
          css={css`
            min-height: 100vh;
            padding: 0 5%;
          `}
          initial={'initial'}
          animate={'animate'}
          exit={'exit'}
          key={router?.route}
        >
          {children}
        </motion.main>
      </AnimatePresence>

      <footer>
        <hr />
        <span>I'm here to stay (Footer)</span>
      </footer>
    </>
  );
};

export default Layout;
