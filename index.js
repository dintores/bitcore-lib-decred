var bitcore = module.exports;


// crypto 
bitcore.crypto = {};
bitcore.crypto.BN = require('./lib/crypto/bn');
bitcore.crypto.ECDSA = require('./lib/crypto/ecdsa');
bitcore.crypto.Hash = require('./lib/crypto/hash');
bitcore.crypto.Random = require('./lib/crypto/random');
bitcore.crypto.Point = require('./lib/crypto/point');
bitcore.crypto.Signature = require('./lib/crypto/signature');

// encoding
bitcore.encoding = {};
bitcore.encoding.Base58 = require('./lib/encoding/base58');
bitcore.encoding.Base58Check = require('./lib/encoding/base58check');
bitcore.encoding.BufferReader = require('./lib/encoding/bufferreader');
bitcore.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
bitcore.encoding.Varint = require('./lib/encoding/varint');

// utilities
bitcore.util = {};
bitcore.util.buffer = require('./lib/util/buffer');
bitcore.util.js = require('./lib/util/js');
bitcore.util.preconditions = require('./lib/util/preconditions');

// transport
bitcore.transport = require('./lib/transport');

// errors thrown by the library
bitcore.errors = require('./lib/errors');

// main bitcoin library
bitcore.Address = require('./lib/address');
bitcore.Block = require('./lib/block');
bitcore.BlockHeader = require('./lib/blockheader');
bitcore.HDPrivateKey = require('./lib/hdprivatekey.js');
bitcore.HDPublicKey = require('./lib/hdpublickey.js');
bitcore.Networks = require('./lib/networks');
bitcore.Opcode = require('./lib/opcode');
bitcore.PaymentProtocol = require('./lib/paymentprotocol');
bitcore.PrivateKey = require('./lib/privatekey');
bitcore.PublicKey = require('./lib/publickey');
bitcore.Script = require('./lib/script');
bitcore.Transaction = require('./lib/transaction');
bitcore.URI = require('./lib/uri');
bitcore.Unit = require('./lib/unit');

// dependencies, subject to change
bitcore.deps = {};
bitcore.deps.bnjs = require('bn.js');
bitcore.deps.bs58 = require('bs58');
bitcore.deps.Buffer = Buffer;
bitcore.deps.elliptic = require('elliptic');

// Internal usage, exposed for testing/advanced tweaking
bitcore._HDKeyCache = require('./lib/hdkeycache');
