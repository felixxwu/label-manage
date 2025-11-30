import { ThemeProvider } from '@emotion/react'
import React, { ReactNode } from 'react'
import { consts } from '../../utils/consts'
import { theme } from '../../utils/theme'
import { Backdrop, Button, CircularProgress } from '@mui/material'
import { store } from '../../utils/store'
import styled from '@emotion/styled'
import { GeneralDialog } from '../popups/GeneralDialog'
import { SnackbarPopup } from '../popups/SnackbarPopup'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { Google } from '@mui/icons-material'
import Head from 'next/head'

export function AppProvider(props: { children: ReactNode }) {
  function signIn() {
    signInWithPopup(getAuth(), new GoogleAuthProvider()).then(result => {
      store().user = result?.user
    })
  }

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap'
          rel='stylesheet'
        />
        <link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons' />
        <link rel='shortcut icon' href='/favicon.svg' />
        <link rel='manifest' href='/manifest.json' />
        <title>SoundCloud Label Manager</title>
      </Head>
      <Wrapper>
        {store().user ? (
          props.children
        ) : (
          <Button startIcon={<Google />} variant='contained' onClick={signIn}>
            Sign in
          </Button>
        )}
      </Wrapper>

      <GeneralDialog />
      <SnackbarPopup />
      <Backdrop open={store().loading || store().userLoading || store().tracksLoading}>
        <CircularProgress />
      </Backdrop>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          background-color: ${theme.palette.background.default};
        }

        * {
          box-sizing: border-box;
          font-family: 'Lexend Deca', sans-serif;
          user-select: none;
          -webkit-tap-highlight-color: transparent;
        }
      `}</style>
    </ThemeProvider>
  )
}

const Wrapper = styled('div')`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: ${consts.maxAppWidth}px;
  margin: auto;
  gap: 30px;
  padding: ${consts.appEndSpace} 10px;
  color: ${theme.palette.primary.main};
`
