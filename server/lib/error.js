export class KnownError extends Error {}

export class DeviceNotFoundError extends KnownError {
  constructor(id) {
    super(`can not find device id: ${id}`)
  }
}

export class DeviceNotReadyError extends KnownError {
  constructor() {
    super('you have to choose a device first')
  }
}

export class ProcessNotFoundError extends KnownError {
  constructor(target) {
    super(`${target} is not running`)
  }
}

export class AppNotFoundError extends KnownError {
  constructor(target) {
    super(`${target} not found in Applications`)
  }
}

export class VersionMismatchError extends KnownError {}

export class InvalidDeviceError extends KnownError {
  constructor(id) {
    super(`${id} is not an iOS device, or you have not installed frida on it`)
  }
}

export class AppAttachError extends KnownError {
  constructor(bundle) {
    super(`unable to spawn app ${bundle}`)
  }
}

export class CommandError extends KnownError {}
