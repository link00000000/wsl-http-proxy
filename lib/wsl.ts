import execa from 'execa'

export const executeCommand = async (command: string, distro?: string) => {
    const distroOptions = distro ? ['--distribution', distro] : []
    const { stdout } = await execa('wsl', [
        ...distroOptions,
        '--exec',
        ...command.split(' ')
    ])

    return stdout
}

export const getIpAddress = async (distro?: string) => {
    const stdout = await executeCommand('ip addr show eth0', distro)
    const matches = stdout.match(/(?<=inet\s)\d+(\.\d+){3}/)
    return matches && matches[0]
}
