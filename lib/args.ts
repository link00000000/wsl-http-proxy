interface IArgv {
    distro?: string
    localPort?: number
    wslPort?: number
}

export const args = (): IArgv => {
    if (process.argv.length < 4 || process.argv.length > 5) {
        console.log('Usage: yarn start <local port> <wsl port> [distro]')
        process.exit(0)
    }

    const [localPort, wslPort, distro] = process.argv.slice(2)

    return {
        distro: distro,
        localPort: localPort ? parseInt(localPort) : undefined,
        wslPort: wslPort ? parseInt(wslPort) : undefined
    }
}
