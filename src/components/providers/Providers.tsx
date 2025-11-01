"use client";

import { ThemeProvider } from "@mui/material";
import { transGivTheme } from "@/themes/theme";
import '@rainbow-me/rainbowkit/styles.css';
import Header from "@/components/layout/Header";
import {
  getDefaultConfig,
  RainbowKitProvider,
  lightTheme
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  mainnet,
  sepolia,
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";

import { http } from 'viem'
import { ReduxProvider } from "@/store/provider";

const config = getDefaultConfig({
  appName: 'transGiv',
  projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || '',
  chains: [mainnet, sepolia],
  transports: {
    // [bscTestnet.id]: http('https://bsc-testnet-rpc.publicnode.com'),
    [mainnet.id]: http('https://eth-mainnet.g.alchemy.com/v2/' + process.env.NEXT_PUBLIC_ALCHEMY_API_KEY),
    [sepolia.id]: http('https://eth-sepolia.g.alchemy.com/v2/' + process.env.NEXT_PUBLIC_ALCHEMY_API_KEY),
  }
})

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1_000 * 60 * 60 * 24, // 24 hours
      refetchOnWindowFocus: false
    }
  }
})

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReduxProvider>
      <WagmiProvider config={config}>
        <QueryClientProvider
          client={queryClient}
        >
          <RainbowKitProvider
            initialChain={sepolia}
            coolMode
            theme={lightTheme({
              accentColor: '#2dd4bf',
              accentColorForeground: 'white',
              borderRadius: 'small',
              fontStack: 'system',
              overlayBlur: 'small'
            })}
          >
            <ThemeProvider theme={transGivTheme}>
              <Header />
              {children}
            </ThemeProvider>
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </ReduxProvider>
  );
}

