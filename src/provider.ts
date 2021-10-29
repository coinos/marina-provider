import {
  AddressInterface,
  AssetValue,
  Balance,
  PsetBase64,
  Recipient,
  Transaction,
  TransactionHex,
  Utxo,
  WalletInfo,
} from './types';

/**
 * Define the Coinos provider methods.
 * Provided by marina extension at window.coinos
 */
export interface CoinosProvider {
  getNetwork(): Promise<'liquid' | 'regtest' | 'testnet'>;

  sendTransaction(
    recipients: Recipient[],
    feeAsset?: string
  ): Promise<TransactionHex>;

  signTransaction(pset: PsetBase64): Promise<PsetBase64>;

  getCoins(): Promise<Utxo[]>;

  getTransactions(): Promise<Transaction[]>;

  getBalances(): Promise<Balance[]>;

  getNextAddress(): Promise<AddressInterface>;

  getNextChangeAddress(): Promise<AddressInterface>;

  approveSpend(toApprove: AssetValue[]): Promise<PsetBase64>;

  getWalletInfo(): Promise<WalletInfo>;
}
