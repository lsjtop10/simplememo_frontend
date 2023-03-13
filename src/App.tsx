/** @jsxImportSource @emotion/react */
import * as React from 'react';
import { styled } from '@mui/system';
import { css } from '@emotion/react'

import {Button, IconButton} from '@mui/material';
import {Card, CardHeader, CardContent} from '@mui/material'
import {createTheme, ThemeProvider} from "@mui/material";
import {Fab} from '@mui/material'

import ShareIcon from '@mui/icons-material/Share';
import GoogleIcon from '@mui/icons-material/Google';
import imgUrl from '../app-logo.svg'
import { MemoInfo } from './component/MemoInfoCard';
import MemoInfoCard from './component/MemoInfoCard'; 

import {PC, Mobile} from './component/ReactiveCP.module'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const theme = createTheme({
  typography: {
    fontFamily: "'Noto Sans KR', sans-serif"
  }
})

export default function App() {

  const Header = css`
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #999;
  //box-shadow: 2px -1px 5px black;
`

const Logo__Img = css`
  width: 40px;
  height: 40px;
  display: inline-block;
`

const Logo__text = css`
  all: unset;
  position: relative;
  top: 4px;
  font-size: 32px;
  font-weight: 700;
  font-family: 'roboto';
  display: inline-block;
  vertical-align: top;
  margin-left: 5px;
`

const PC_Main = css`
  display: grid;
  grid-template-columns: 450px 1fr;
  padding: 5px;
`

class GlobalState{
  isLogined:boolean

  constructor(){
    this.isLogined = false;
  }
}

let [global, setGlobal] = React.useState(new GlobalState)

  let memoinfoTest:MemoInfo[] = [{Id:"0xoe", Title:'이것은 제목입니다네네네네네ㅔ넨네네네네네네네네네', Date:new Date()}]
  let [memoList, setMemoList] = React.useState<MemoInfo[]>(memoinfoTest)

  return(
    <div className='App'>
      <ThemeProvider theme={theme}>
        <header css={Header}>
              <section>
                  <img src={imgUrl} css={Logo__Img} alt="로고 이미지"/>
                  <PC>
                    <h1 css={Logo__text}>
                        Simple Memo
                    </h1>
                  </PC>
              </section>
              <div style={{display:'inline'}}>
                  <span className="sr-only">공유</span>
                  <IconButton style={{marginRight:"6px"}}>
                      <ShareIcon></ShareIcon>
                  </IconButton>
                  {
                    global.isLogined? 
                      <span>profile</span>:
                      <span>
                        <Button variant="contained" aria-label="구글로 로그인" startIcon={<GoogleIcon/>}
                          onClick={
                            () => {
                              setGlobal((prev) => {
                                let newGlobal:GlobalState = {...prev};
                                newGlobal.isLogined = true;
                                return newGlobal;
                              });
                            }
                          }>로그인</Button>
                      </span>
                  }
              </div>
        </header>

        <main >
          <PC>
            <div css={PC_Main}>
              <div css={css`grid-row:1; padding:5px; position:relative;`}>
                {memoList.map(function(item){
                  return <MemoInfoCard {...item}></MemoInfoCard>;
                })}
                <Fab css={css`position:absolute; right:0px; bottom:0px;`}></Fab>
              </div>
            </div>
          </PC>
          <Mobile>
            <div>
              <div>
                {memoList.map(function(item){
                  return <MemoInfoCard {...item}></MemoInfoCard>;
                })}
              </div>
            </div>
          </Mobile>
        </main>
      </ThemeProvider>
    </div>
  ) 
}