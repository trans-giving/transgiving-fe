"use client";

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';


export default function Header() {
  // const { account, balance, isConnecting, connectWallet, disconnect } = useWeb3();
  const account = useAccount()

  console.log('account: ', account);
  

  const formatAddress = (address) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const formatBalance = (balance) => {
    return parseFloat(balance).toFixed(4);
  };

  return (
    <AppBar sx={{ bgcolor: 'teal600' }} position="static">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography
          variant="h5"
          component="h1"
          sx={{
            fontWeight: 'bold',
            color: 'white'
          }}
        >
          transGiv
        </Typography>

        {/* <Button
            variant="contained"
            // disabled={}
            sx={{
              textTransform: 'none',
              px: 3,
              py: '0.3rem',
              border: 'none',
              boxShadow: 'none',
              color: 'white',
              fontWeight: 'bold',
              transition: 'ease-in-out 0.2s',
              cursor: 'pointer',
              bgcolor: 'teal400',
              fontSize:'18px',
              ":hover": {
                bgcolor: 'teal300',
                border: 'none',
                boxShadow: 'none',
              },
              ":disabled": {
                bgcolor: 'rgba(255, 255, 255, 0.3)',
                color: 'white',
              }
            }}
          >
            Login
          </Button> */}
        <ConnectButton label='Kết nối ví' chainStatus={'icon'} showBalance={true} />
      </Toolbar>
    </AppBar>
  );
}
