type Logger = (...args: any[]) => void

interface LogProvider {
    log: Logger
    debug?: Logger
    info?: Logger
    warn?: Logger
    error?: Logger
}

const nop = () => {}

export const nopLogProvider = (_provider: LogProvider): LogProvider => ({
    log: nop,
    debug: nop,
    info: nop,
    warn: nop,
    error: nop
})
