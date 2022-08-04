import TransactionsDb from "./create-and-populate_transacao.js";
import SuppliersDb from "./create-and-populate_fornecedor.js";
import MenuDb from "./create-and-populate_cardapio.js";
import StorageDb from "./create-and-populate_estoque.js";
import StaffDb from "./create-and-populate_funcionario.js";
import ClientDb from "./create-and-populate_cliente.js";

TransactionsDb.transactionsSerialize();
SuppliersDb.suppliersSerialize();
MenuDb.menuSerialize();
StorageDb.storageSerialize();
StaffDb.staffSerialize();
ClientDb.clientSerialize();