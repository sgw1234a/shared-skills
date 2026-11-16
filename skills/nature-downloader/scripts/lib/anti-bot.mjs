import { STATUS } from "./status-codes.mjs";

export async function handleVerification(_proxy, _target, wallInfo = {}) {
  return {
    passed: false,
    attempted: false,
    status: wallInfo.status ?? STATUS.PUBLISHER_VERIFICATION_WAITING_USER,
  };
}

export { STATUS };