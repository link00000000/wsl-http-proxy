#!/usr/bin/env node

import { nopLogProvider } from './lib/logger'
import { args } from './lib/args'
import { getIpAddress } from './lib/wsl'
import express from 'express'
import { createProxyMiddleware } from 'http-proxy-middleware'

async function main() {
    const { distro, localPort, wslPort } = args()
    const wslIp = await getIpAddress(distro)
    const app = express()

    app.use(
        createProxyMiddleware(`http://${wslIp}:${wslPort}`, {
            logProvider: nopLogProvider,
            ws: true
        })
    )

    app.listen(localPort, () => {
        console.log(
            `WSL HTTP Proxy: http://localhost:${localPort} -> http://${wslIp}:${wslPort}`
        )
    })
}

main()
