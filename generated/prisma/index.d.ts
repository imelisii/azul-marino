
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model actividades
 * 
 */
export type actividades = $Result.DefaultSelection<Prisma.$actividadesPayload>
/**
 * Model familias
 * 
 */
export type familias = $Result.DefaultSelection<Prisma.$familiasPayload>
/**
 * Model inscripciones
 * 
 */
export type inscripciones = $Result.DefaultSelection<Prisma.$inscripcionesPayload>
/**
 * Model saldos
 * 
 */
export type saldos = $Result.DefaultSelection<Prisma.$saldosPayload>
/**
 * Model socios
 * 
 */
export type socios = $Result.DefaultSelection<Prisma.$sociosPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Actividades
 * const actividades = await prisma.actividades.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Actividades
   * const actividades = await prisma.actividades.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.actividades`: Exposes CRUD operations for the **actividades** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Actividades
    * const actividades = await prisma.actividades.findMany()
    * ```
    */
  get actividades(): Prisma.actividadesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.familias`: Exposes CRUD operations for the **familias** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Familias
    * const familias = await prisma.familias.findMany()
    * ```
    */
  get familias(): Prisma.familiasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inscripciones`: Exposes CRUD operations for the **inscripciones** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inscripciones
    * const inscripciones = await prisma.inscripciones.findMany()
    * ```
    */
  get inscripciones(): Prisma.inscripcionesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.saldos`: Exposes CRUD operations for the **saldos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Saldos
    * const saldos = await prisma.saldos.findMany()
    * ```
    */
  get saldos(): Prisma.saldosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.socios`: Exposes CRUD operations for the **socios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Socios
    * const socios = await prisma.socios.findMany()
    * ```
    */
  get socios(): Prisma.sociosDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    actividades: 'actividades',
    familias: 'familias',
    inscripciones: 'inscripciones',
    saldos: 'saldos',
    socios: 'socios'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "actividades" | "familias" | "inscripciones" | "saldos" | "socios"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      actividades: {
        payload: Prisma.$actividadesPayload<ExtArgs>
        fields: Prisma.actividadesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.actividadesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$actividadesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.actividadesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$actividadesPayload>
          }
          findFirst: {
            args: Prisma.actividadesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$actividadesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.actividadesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$actividadesPayload>
          }
          findMany: {
            args: Prisma.actividadesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$actividadesPayload>[]
          }
          create: {
            args: Prisma.actividadesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$actividadesPayload>
          }
          createMany: {
            args: Prisma.actividadesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.actividadesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$actividadesPayload>
          }
          update: {
            args: Prisma.actividadesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$actividadesPayload>
          }
          deleteMany: {
            args: Prisma.actividadesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.actividadesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.actividadesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$actividadesPayload>
          }
          aggregate: {
            args: Prisma.ActividadesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActividades>
          }
          groupBy: {
            args: Prisma.actividadesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActividadesGroupByOutputType>[]
          }
          count: {
            args: Prisma.actividadesCountArgs<ExtArgs>
            result: $Utils.Optional<ActividadesCountAggregateOutputType> | number
          }
        }
      }
      familias: {
        payload: Prisma.$familiasPayload<ExtArgs>
        fields: Prisma.familiasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.familiasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$familiasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.familiasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$familiasPayload>
          }
          findFirst: {
            args: Prisma.familiasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$familiasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.familiasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$familiasPayload>
          }
          findMany: {
            args: Prisma.familiasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$familiasPayload>[]
          }
          create: {
            args: Prisma.familiasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$familiasPayload>
          }
          createMany: {
            args: Prisma.familiasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.familiasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$familiasPayload>
          }
          update: {
            args: Prisma.familiasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$familiasPayload>
          }
          deleteMany: {
            args: Prisma.familiasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.familiasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.familiasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$familiasPayload>
          }
          aggregate: {
            args: Prisma.FamiliasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFamilias>
          }
          groupBy: {
            args: Prisma.familiasGroupByArgs<ExtArgs>
            result: $Utils.Optional<FamiliasGroupByOutputType>[]
          }
          count: {
            args: Prisma.familiasCountArgs<ExtArgs>
            result: $Utils.Optional<FamiliasCountAggregateOutputType> | number
          }
        }
      }
      inscripciones: {
        payload: Prisma.$inscripcionesPayload<ExtArgs>
        fields: Prisma.inscripcionesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.inscripcionesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inscripcionesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.inscripcionesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inscripcionesPayload>
          }
          findFirst: {
            args: Prisma.inscripcionesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inscripcionesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.inscripcionesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inscripcionesPayload>
          }
          findMany: {
            args: Prisma.inscripcionesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inscripcionesPayload>[]
          }
          create: {
            args: Prisma.inscripcionesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inscripcionesPayload>
          }
          createMany: {
            args: Prisma.inscripcionesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.inscripcionesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inscripcionesPayload>
          }
          update: {
            args: Prisma.inscripcionesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inscripcionesPayload>
          }
          deleteMany: {
            args: Prisma.inscripcionesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.inscripcionesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.inscripcionesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inscripcionesPayload>
          }
          aggregate: {
            args: Prisma.InscripcionesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInscripciones>
          }
          groupBy: {
            args: Prisma.inscripcionesGroupByArgs<ExtArgs>
            result: $Utils.Optional<InscripcionesGroupByOutputType>[]
          }
          count: {
            args: Prisma.inscripcionesCountArgs<ExtArgs>
            result: $Utils.Optional<InscripcionesCountAggregateOutputType> | number
          }
        }
      }
      saldos: {
        payload: Prisma.$saldosPayload<ExtArgs>
        fields: Prisma.saldosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.saldosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saldosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.saldosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saldosPayload>
          }
          findFirst: {
            args: Prisma.saldosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saldosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.saldosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saldosPayload>
          }
          findMany: {
            args: Prisma.saldosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saldosPayload>[]
          }
          create: {
            args: Prisma.saldosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saldosPayload>
          }
          createMany: {
            args: Prisma.saldosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.saldosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saldosPayload>
          }
          update: {
            args: Prisma.saldosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saldosPayload>
          }
          deleteMany: {
            args: Prisma.saldosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.saldosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.saldosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$saldosPayload>
          }
          aggregate: {
            args: Prisma.SaldosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSaldos>
          }
          groupBy: {
            args: Prisma.saldosGroupByArgs<ExtArgs>
            result: $Utils.Optional<SaldosGroupByOutputType>[]
          }
          count: {
            args: Prisma.saldosCountArgs<ExtArgs>
            result: $Utils.Optional<SaldosCountAggregateOutputType> | number
          }
        }
      }
      socios: {
        payload: Prisma.$sociosPayload<ExtArgs>
        fields: Prisma.sociosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sociosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sociosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sociosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sociosPayload>
          }
          findFirst: {
            args: Prisma.sociosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sociosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sociosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sociosPayload>
          }
          findMany: {
            args: Prisma.sociosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sociosPayload>[]
          }
          create: {
            args: Prisma.sociosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sociosPayload>
          }
          createMany: {
            args: Prisma.sociosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.sociosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sociosPayload>
          }
          update: {
            args: Prisma.sociosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sociosPayload>
          }
          deleteMany: {
            args: Prisma.sociosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sociosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.sociosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sociosPayload>
          }
          aggregate: {
            args: Prisma.SociosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSocios>
          }
          groupBy: {
            args: Prisma.sociosGroupByArgs<ExtArgs>
            result: $Utils.Optional<SociosGroupByOutputType>[]
          }
          count: {
            args: Prisma.sociosCountArgs<ExtArgs>
            result: $Utils.Optional<SociosCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    actividades?: actividadesOmit
    familias?: familiasOmit
    inscripciones?: inscripcionesOmit
    saldos?: saldosOmit
    socios?: sociosOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ActividadesCountOutputType
   */

  export type ActividadesCountOutputType = {
    inscripciones: number
  }

  export type ActividadesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inscripciones?: boolean | ActividadesCountOutputTypeCountInscripcionesArgs
  }

  // Custom InputTypes
  /**
   * ActividadesCountOutputType without action
   */
  export type ActividadesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActividadesCountOutputType
     */
    select?: ActividadesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ActividadesCountOutputType without action
   */
  export type ActividadesCountOutputTypeCountInscripcionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: inscripcionesWhereInput
  }


  /**
   * Count Type FamiliasCountOutputType
   */

  export type FamiliasCountOutputType = {
    socios: number
  }

  export type FamiliasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    socios?: boolean | FamiliasCountOutputTypeCountSociosArgs
  }

  // Custom InputTypes
  /**
   * FamiliasCountOutputType without action
   */
  export type FamiliasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamiliasCountOutputType
     */
    select?: FamiliasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FamiliasCountOutputType without action
   */
  export type FamiliasCountOutputTypeCountSociosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sociosWhereInput
  }


  /**
   * Count Type SociosCountOutputType
   */

  export type SociosCountOutputType = {
    inscripciones: number
    saldos: number
  }

  export type SociosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inscripciones?: boolean | SociosCountOutputTypeCountInscripcionesArgs
    saldos?: boolean | SociosCountOutputTypeCountSaldosArgs
  }

  // Custom InputTypes
  /**
   * SociosCountOutputType without action
   */
  export type SociosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SociosCountOutputType
     */
    select?: SociosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SociosCountOutputType without action
   */
  export type SociosCountOutputTypeCountInscripcionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: inscripcionesWhereInput
  }

  /**
   * SociosCountOutputType without action
   */
  export type SociosCountOutputTypeCountSaldosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: saldosWhereInput
  }


  /**
   * Models
   */

  /**
   * Model actividades
   */

  export type AggregateActividades = {
    _count: ActividadesCountAggregateOutputType | null
    _avg: ActividadesAvgAggregateOutputType | null
    _sum: ActividadesSumAggregateOutputType | null
    _min: ActividadesMinAggregateOutputType | null
    _max: ActividadesMaxAggregateOutputType | null
  }

  export type ActividadesAvgAggregateOutputType = {
    id: number | null
    precio: Decimal | null
  }

  export type ActividadesSumAggregateOutputType = {
    id: number | null
    precio: Decimal | null
  }

  export type ActividadesMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    precio: Decimal | null
    activa: boolean | null
  }

  export type ActividadesMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    precio: Decimal | null
    activa: boolean | null
  }

  export type ActividadesCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    precio: number
    activa: number
    _all: number
  }


  export type ActividadesAvgAggregateInputType = {
    id?: true
    precio?: true
  }

  export type ActividadesSumAggregateInputType = {
    id?: true
    precio?: true
  }

  export type ActividadesMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    precio?: true
    activa?: true
  }

  export type ActividadesMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    precio?: true
    activa?: true
  }

  export type ActividadesCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    precio?: true
    activa?: true
    _all?: true
  }

  export type ActividadesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which actividades to aggregate.
     */
    where?: actividadesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of actividades to fetch.
     */
    orderBy?: actividadesOrderByWithRelationInput | actividadesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: actividadesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` actividades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` actividades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned actividades
    **/
    _count?: true | ActividadesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActividadesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActividadesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActividadesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActividadesMaxAggregateInputType
  }

  export type GetActividadesAggregateType<T extends ActividadesAggregateArgs> = {
        [P in keyof T & keyof AggregateActividades]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActividades[P]>
      : GetScalarType<T[P], AggregateActividades[P]>
  }




  export type actividadesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: actividadesWhereInput
    orderBy?: actividadesOrderByWithAggregationInput | actividadesOrderByWithAggregationInput[]
    by: ActividadesScalarFieldEnum[] | ActividadesScalarFieldEnum
    having?: actividadesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActividadesCountAggregateInputType | true
    _avg?: ActividadesAvgAggregateInputType
    _sum?: ActividadesSumAggregateInputType
    _min?: ActividadesMinAggregateInputType
    _max?: ActividadesMaxAggregateInputType
  }

  export type ActividadesGroupByOutputType = {
    id: number
    nombre: string
    descripcion: string | null
    precio: Decimal
    activa: boolean | null
    _count: ActividadesCountAggregateOutputType | null
    _avg: ActividadesAvgAggregateOutputType | null
    _sum: ActividadesSumAggregateOutputType | null
    _min: ActividadesMinAggregateOutputType | null
    _max: ActividadesMaxAggregateOutputType | null
  }

  type GetActividadesGroupByPayload<T extends actividadesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActividadesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActividadesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActividadesGroupByOutputType[P]>
            : GetScalarType<T[P], ActividadesGroupByOutputType[P]>
        }
      >
    >


  export type actividadesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio?: boolean
    activa?: boolean
    inscripciones?: boolean | actividades$inscripcionesArgs<ExtArgs>
    _count?: boolean | ActividadesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["actividades"]>



  export type actividadesSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    precio?: boolean
    activa?: boolean
  }

  export type actividadesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "descripcion" | "precio" | "activa", ExtArgs["result"]["actividades"]>
  export type actividadesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inscripciones?: boolean | actividades$inscripcionesArgs<ExtArgs>
    _count?: boolean | ActividadesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $actividadesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "actividades"
    objects: {
      inscripciones: Prisma.$inscripcionesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      descripcion: string | null
      precio: Prisma.Decimal
      activa: boolean | null
    }, ExtArgs["result"]["actividades"]>
    composites: {}
  }

  type actividadesGetPayload<S extends boolean | null | undefined | actividadesDefaultArgs> = $Result.GetResult<Prisma.$actividadesPayload, S>

  type actividadesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<actividadesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActividadesCountAggregateInputType | true
    }

  export interface actividadesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['actividades'], meta: { name: 'actividades' } }
    /**
     * Find zero or one Actividades that matches the filter.
     * @param {actividadesFindUniqueArgs} args - Arguments to find a Actividades
     * @example
     * // Get one Actividades
     * const actividades = await prisma.actividades.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends actividadesFindUniqueArgs>(args: SelectSubset<T, actividadesFindUniqueArgs<ExtArgs>>): Prisma__actividadesClient<$Result.GetResult<Prisma.$actividadesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Actividades that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {actividadesFindUniqueOrThrowArgs} args - Arguments to find a Actividades
     * @example
     * // Get one Actividades
     * const actividades = await prisma.actividades.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends actividadesFindUniqueOrThrowArgs>(args: SelectSubset<T, actividadesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__actividadesClient<$Result.GetResult<Prisma.$actividadesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Actividades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {actividadesFindFirstArgs} args - Arguments to find a Actividades
     * @example
     * // Get one Actividades
     * const actividades = await prisma.actividades.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends actividadesFindFirstArgs>(args?: SelectSubset<T, actividadesFindFirstArgs<ExtArgs>>): Prisma__actividadesClient<$Result.GetResult<Prisma.$actividadesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Actividades that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {actividadesFindFirstOrThrowArgs} args - Arguments to find a Actividades
     * @example
     * // Get one Actividades
     * const actividades = await prisma.actividades.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends actividadesFindFirstOrThrowArgs>(args?: SelectSubset<T, actividadesFindFirstOrThrowArgs<ExtArgs>>): Prisma__actividadesClient<$Result.GetResult<Prisma.$actividadesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Actividades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {actividadesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Actividades
     * const actividades = await prisma.actividades.findMany()
     * 
     * // Get first 10 Actividades
     * const actividades = await prisma.actividades.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const actividadesWithIdOnly = await prisma.actividades.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends actividadesFindManyArgs>(args?: SelectSubset<T, actividadesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$actividadesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Actividades.
     * @param {actividadesCreateArgs} args - Arguments to create a Actividades.
     * @example
     * // Create one Actividades
     * const Actividades = await prisma.actividades.create({
     *   data: {
     *     // ... data to create a Actividades
     *   }
     * })
     * 
     */
    create<T extends actividadesCreateArgs>(args: SelectSubset<T, actividadesCreateArgs<ExtArgs>>): Prisma__actividadesClient<$Result.GetResult<Prisma.$actividadesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Actividades.
     * @param {actividadesCreateManyArgs} args - Arguments to create many Actividades.
     * @example
     * // Create many Actividades
     * const actividades = await prisma.actividades.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends actividadesCreateManyArgs>(args?: SelectSubset<T, actividadesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Actividades.
     * @param {actividadesDeleteArgs} args - Arguments to delete one Actividades.
     * @example
     * // Delete one Actividades
     * const Actividades = await prisma.actividades.delete({
     *   where: {
     *     // ... filter to delete one Actividades
     *   }
     * })
     * 
     */
    delete<T extends actividadesDeleteArgs>(args: SelectSubset<T, actividadesDeleteArgs<ExtArgs>>): Prisma__actividadesClient<$Result.GetResult<Prisma.$actividadesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Actividades.
     * @param {actividadesUpdateArgs} args - Arguments to update one Actividades.
     * @example
     * // Update one Actividades
     * const actividades = await prisma.actividades.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends actividadesUpdateArgs>(args: SelectSubset<T, actividadesUpdateArgs<ExtArgs>>): Prisma__actividadesClient<$Result.GetResult<Prisma.$actividadesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Actividades.
     * @param {actividadesDeleteManyArgs} args - Arguments to filter Actividades to delete.
     * @example
     * // Delete a few Actividades
     * const { count } = await prisma.actividades.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends actividadesDeleteManyArgs>(args?: SelectSubset<T, actividadesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Actividades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {actividadesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Actividades
     * const actividades = await prisma.actividades.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends actividadesUpdateManyArgs>(args: SelectSubset<T, actividadesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Actividades.
     * @param {actividadesUpsertArgs} args - Arguments to update or create a Actividades.
     * @example
     * // Update or create a Actividades
     * const actividades = await prisma.actividades.upsert({
     *   create: {
     *     // ... data to create a Actividades
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Actividades we want to update
     *   }
     * })
     */
    upsert<T extends actividadesUpsertArgs>(args: SelectSubset<T, actividadesUpsertArgs<ExtArgs>>): Prisma__actividadesClient<$Result.GetResult<Prisma.$actividadesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Actividades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {actividadesCountArgs} args - Arguments to filter Actividades to count.
     * @example
     * // Count the number of Actividades
     * const count = await prisma.actividades.count({
     *   where: {
     *     // ... the filter for the Actividades we want to count
     *   }
     * })
    **/
    count<T extends actividadesCountArgs>(
      args?: Subset<T, actividadesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActividadesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Actividades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActividadesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ActividadesAggregateArgs>(args: Subset<T, ActividadesAggregateArgs>): Prisma.PrismaPromise<GetActividadesAggregateType<T>>

    /**
     * Group by Actividades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {actividadesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends actividadesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: actividadesGroupByArgs['orderBy'] }
        : { orderBy?: actividadesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, actividadesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActividadesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the actividades model
   */
  readonly fields: actividadesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for actividades.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__actividadesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inscripciones<T extends actividades$inscripcionesArgs<ExtArgs> = {}>(args?: Subset<T, actividades$inscripcionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inscripcionesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the actividades model
   */
  interface actividadesFieldRefs {
    readonly id: FieldRef<"actividades", 'Int'>
    readonly nombre: FieldRef<"actividades", 'String'>
    readonly descripcion: FieldRef<"actividades", 'String'>
    readonly precio: FieldRef<"actividades", 'Decimal'>
    readonly activa: FieldRef<"actividades", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * actividades findUnique
   */
  export type actividadesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actividades
     */
    select?: actividadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the actividades
     */
    omit?: actividadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actividadesInclude<ExtArgs> | null
    /**
     * Filter, which actividades to fetch.
     */
    where: actividadesWhereUniqueInput
  }

  /**
   * actividades findUniqueOrThrow
   */
  export type actividadesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actividades
     */
    select?: actividadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the actividades
     */
    omit?: actividadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actividadesInclude<ExtArgs> | null
    /**
     * Filter, which actividades to fetch.
     */
    where: actividadesWhereUniqueInput
  }

  /**
   * actividades findFirst
   */
  export type actividadesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actividades
     */
    select?: actividadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the actividades
     */
    omit?: actividadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actividadesInclude<ExtArgs> | null
    /**
     * Filter, which actividades to fetch.
     */
    where?: actividadesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of actividades to fetch.
     */
    orderBy?: actividadesOrderByWithRelationInput | actividadesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for actividades.
     */
    cursor?: actividadesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` actividades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` actividades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of actividades.
     */
    distinct?: ActividadesScalarFieldEnum | ActividadesScalarFieldEnum[]
  }

  /**
   * actividades findFirstOrThrow
   */
  export type actividadesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actividades
     */
    select?: actividadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the actividades
     */
    omit?: actividadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actividadesInclude<ExtArgs> | null
    /**
     * Filter, which actividades to fetch.
     */
    where?: actividadesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of actividades to fetch.
     */
    orderBy?: actividadesOrderByWithRelationInput | actividadesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for actividades.
     */
    cursor?: actividadesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` actividades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` actividades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of actividades.
     */
    distinct?: ActividadesScalarFieldEnum | ActividadesScalarFieldEnum[]
  }

  /**
   * actividades findMany
   */
  export type actividadesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actividades
     */
    select?: actividadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the actividades
     */
    omit?: actividadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actividadesInclude<ExtArgs> | null
    /**
     * Filter, which actividades to fetch.
     */
    where?: actividadesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of actividades to fetch.
     */
    orderBy?: actividadesOrderByWithRelationInput | actividadesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing actividades.
     */
    cursor?: actividadesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` actividades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` actividades.
     */
    skip?: number
    distinct?: ActividadesScalarFieldEnum | ActividadesScalarFieldEnum[]
  }

  /**
   * actividades create
   */
  export type actividadesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actividades
     */
    select?: actividadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the actividades
     */
    omit?: actividadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actividadesInclude<ExtArgs> | null
    /**
     * The data needed to create a actividades.
     */
    data: XOR<actividadesCreateInput, actividadesUncheckedCreateInput>
  }

  /**
   * actividades createMany
   */
  export type actividadesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many actividades.
     */
    data: actividadesCreateManyInput | actividadesCreateManyInput[]
  }

  /**
   * actividades update
   */
  export type actividadesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actividades
     */
    select?: actividadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the actividades
     */
    omit?: actividadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actividadesInclude<ExtArgs> | null
    /**
     * The data needed to update a actividades.
     */
    data: XOR<actividadesUpdateInput, actividadesUncheckedUpdateInput>
    /**
     * Choose, which actividades to update.
     */
    where: actividadesWhereUniqueInput
  }

  /**
   * actividades updateMany
   */
  export type actividadesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update actividades.
     */
    data: XOR<actividadesUpdateManyMutationInput, actividadesUncheckedUpdateManyInput>
    /**
     * Filter which actividades to update
     */
    where?: actividadesWhereInput
    /**
     * Limit how many actividades to update.
     */
    limit?: number
  }

  /**
   * actividades upsert
   */
  export type actividadesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actividades
     */
    select?: actividadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the actividades
     */
    omit?: actividadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actividadesInclude<ExtArgs> | null
    /**
     * The filter to search for the actividades to update in case it exists.
     */
    where: actividadesWhereUniqueInput
    /**
     * In case the actividades found by the `where` argument doesn't exist, create a new actividades with this data.
     */
    create: XOR<actividadesCreateInput, actividadesUncheckedCreateInput>
    /**
     * In case the actividades was found with the provided `where` argument, update it with this data.
     */
    update: XOR<actividadesUpdateInput, actividadesUncheckedUpdateInput>
  }

  /**
   * actividades delete
   */
  export type actividadesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actividades
     */
    select?: actividadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the actividades
     */
    omit?: actividadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actividadesInclude<ExtArgs> | null
    /**
     * Filter which actividades to delete.
     */
    where: actividadesWhereUniqueInput
  }

  /**
   * actividades deleteMany
   */
  export type actividadesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which actividades to delete
     */
    where?: actividadesWhereInput
    /**
     * Limit how many actividades to delete.
     */
    limit?: number
  }

  /**
   * actividades.inscripciones
   */
  export type actividades$inscripcionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inscripciones
     */
    select?: inscripcionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inscripciones
     */
    omit?: inscripcionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inscripcionesInclude<ExtArgs> | null
    where?: inscripcionesWhereInput
    orderBy?: inscripcionesOrderByWithRelationInput | inscripcionesOrderByWithRelationInput[]
    cursor?: inscripcionesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InscripcionesScalarFieldEnum | InscripcionesScalarFieldEnum[]
  }

  /**
   * actividades without action
   */
  export type actividadesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actividades
     */
    select?: actividadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the actividades
     */
    omit?: actividadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actividadesInclude<ExtArgs> | null
  }


  /**
   * Model familias
   */

  export type AggregateFamilias = {
    _count: FamiliasCountAggregateOutputType | null
    _avg: FamiliasAvgAggregateOutputType | null
    _sum: FamiliasSumAggregateOutputType | null
    _min: FamiliasMinAggregateOutputType | null
    _max: FamiliasMaxAggregateOutputType | null
  }

  export type FamiliasAvgAggregateOutputType = {
    id: number | null
  }

  export type FamiliasSumAggregateOutputType = {
    id: number | null
  }

  export type FamiliasMinAggregateOutputType = {
    id: number | null
    nombre_familia: string | null
    fecha_alta: Date | null
  }

  export type FamiliasMaxAggregateOutputType = {
    id: number | null
    nombre_familia: string | null
    fecha_alta: Date | null
  }

  export type FamiliasCountAggregateOutputType = {
    id: number
    nombre_familia: number
    fecha_alta: number
    _all: number
  }


  export type FamiliasAvgAggregateInputType = {
    id?: true
  }

  export type FamiliasSumAggregateInputType = {
    id?: true
  }

  export type FamiliasMinAggregateInputType = {
    id?: true
    nombre_familia?: true
    fecha_alta?: true
  }

  export type FamiliasMaxAggregateInputType = {
    id?: true
    nombre_familia?: true
    fecha_alta?: true
  }

  export type FamiliasCountAggregateInputType = {
    id?: true
    nombre_familia?: true
    fecha_alta?: true
    _all?: true
  }

  export type FamiliasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which familias to aggregate.
     */
    where?: familiasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of familias to fetch.
     */
    orderBy?: familiasOrderByWithRelationInput | familiasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: familiasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` familias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` familias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned familias
    **/
    _count?: true | FamiliasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FamiliasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FamiliasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FamiliasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FamiliasMaxAggregateInputType
  }

  export type GetFamiliasAggregateType<T extends FamiliasAggregateArgs> = {
        [P in keyof T & keyof AggregateFamilias]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFamilias[P]>
      : GetScalarType<T[P], AggregateFamilias[P]>
  }




  export type familiasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: familiasWhereInput
    orderBy?: familiasOrderByWithAggregationInput | familiasOrderByWithAggregationInput[]
    by: FamiliasScalarFieldEnum[] | FamiliasScalarFieldEnum
    having?: familiasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FamiliasCountAggregateInputType | true
    _avg?: FamiliasAvgAggregateInputType
    _sum?: FamiliasSumAggregateInputType
    _min?: FamiliasMinAggregateInputType
    _max?: FamiliasMaxAggregateInputType
  }

  export type FamiliasGroupByOutputType = {
    id: number
    nombre_familia: string
    fecha_alta: Date
    _count: FamiliasCountAggregateOutputType | null
    _avg: FamiliasAvgAggregateOutputType | null
    _sum: FamiliasSumAggregateOutputType | null
    _min: FamiliasMinAggregateOutputType | null
    _max: FamiliasMaxAggregateOutputType | null
  }

  type GetFamiliasGroupByPayload<T extends familiasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FamiliasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FamiliasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FamiliasGroupByOutputType[P]>
            : GetScalarType<T[P], FamiliasGroupByOutputType[P]>
        }
      >
    >


  export type familiasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre_familia?: boolean
    fecha_alta?: boolean
    socios?: boolean | familias$sociosArgs<ExtArgs>
    _count?: boolean | FamiliasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["familias"]>



  export type familiasSelectScalar = {
    id?: boolean
    nombre_familia?: boolean
    fecha_alta?: boolean
  }

  export type familiasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre_familia" | "fecha_alta", ExtArgs["result"]["familias"]>
  export type familiasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    socios?: boolean | familias$sociosArgs<ExtArgs>
    _count?: boolean | FamiliasCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $familiasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "familias"
    objects: {
      socios: Prisma.$sociosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre_familia: string
      fecha_alta: Date
    }, ExtArgs["result"]["familias"]>
    composites: {}
  }

  type familiasGetPayload<S extends boolean | null | undefined | familiasDefaultArgs> = $Result.GetResult<Prisma.$familiasPayload, S>

  type familiasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<familiasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FamiliasCountAggregateInputType | true
    }

  export interface familiasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['familias'], meta: { name: 'familias' } }
    /**
     * Find zero or one Familias that matches the filter.
     * @param {familiasFindUniqueArgs} args - Arguments to find a Familias
     * @example
     * // Get one Familias
     * const familias = await prisma.familias.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends familiasFindUniqueArgs>(args: SelectSubset<T, familiasFindUniqueArgs<ExtArgs>>): Prisma__familiasClient<$Result.GetResult<Prisma.$familiasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Familias that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {familiasFindUniqueOrThrowArgs} args - Arguments to find a Familias
     * @example
     * // Get one Familias
     * const familias = await prisma.familias.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends familiasFindUniqueOrThrowArgs>(args: SelectSubset<T, familiasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__familiasClient<$Result.GetResult<Prisma.$familiasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Familias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {familiasFindFirstArgs} args - Arguments to find a Familias
     * @example
     * // Get one Familias
     * const familias = await prisma.familias.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends familiasFindFirstArgs>(args?: SelectSubset<T, familiasFindFirstArgs<ExtArgs>>): Prisma__familiasClient<$Result.GetResult<Prisma.$familiasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Familias that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {familiasFindFirstOrThrowArgs} args - Arguments to find a Familias
     * @example
     * // Get one Familias
     * const familias = await prisma.familias.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends familiasFindFirstOrThrowArgs>(args?: SelectSubset<T, familiasFindFirstOrThrowArgs<ExtArgs>>): Prisma__familiasClient<$Result.GetResult<Prisma.$familiasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Familias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {familiasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Familias
     * const familias = await prisma.familias.findMany()
     * 
     * // Get first 10 Familias
     * const familias = await prisma.familias.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const familiasWithIdOnly = await prisma.familias.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends familiasFindManyArgs>(args?: SelectSubset<T, familiasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$familiasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Familias.
     * @param {familiasCreateArgs} args - Arguments to create a Familias.
     * @example
     * // Create one Familias
     * const Familias = await prisma.familias.create({
     *   data: {
     *     // ... data to create a Familias
     *   }
     * })
     * 
     */
    create<T extends familiasCreateArgs>(args: SelectSubset<T, familiasCreateArgs<ExtArgs>>): Prisma__familiasClient<$Result.GetResult<Prisma.$familiasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Familias.
     * @param {familiasCreateManyArgs} args - Arguments to create many Familias.
     * @example
     * // Create many Familias
     * const familias = await prisma.familias.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends familiasCreateManyArgs>(args?: SelectSubset<T, familiasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Familias.
     * @param {familiasDeleteArgs} args - Arguments to delete one Familias.
     * @example
     * // Delete one Familias
     * const Familias = await prisma.familias.delete({
     *   where: {
     *     // ... filter to delete one Familias
     *   }
     * })
     * 
     */
    delete<T extends familiasDeleteArgs>(args: SelectSubset<T, familiasDeleteArgs<ExtArgs>>): Prisma__familiasClient<$Result.GetResult<Prisma.$familiasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Familias.
     * @param {familiasUpdateArgs} args - Arguments to update one Familias.
     * @example
     * // Update one Familias
     * const familias = await prisma.familias.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends familiasUpdateArgs>(args: SelectSubset<T, familiasUpdateArgs<ExtArgs>>): Prisma__familiasClient<$Result.GetResult<Prisma.$familiasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Familias.
     * @param {familiasDeleteManyArgs} args - Arguments to filter Familias to delete.
     * @example
     * // Delete a few Familias
     * const { count } = await prisma.familias.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends familiasDeleteManyArgs>(args?: SelectSubset<T, familiasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Familias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {familiasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Familias
     * const familias = await prisma.familias.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends familiasUpdateManyArgs>(args: SelectSubset<T, familiasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Familias.
     * @param {familiasUpsertArgs} args - Arguments to update or create a Familias.
     * @example
     * // Update or create a Familias
     * const familias = await prisma.familias.upsert({
     *   create: {
     *     // ... data to create a Familias
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Familias we want to update
     *   }
     * })
     */
    upsert<T extends familiasUpsertArgs>(args: SelectSubset<T, familiasUpsertArgs<ExtArgs>>): Prisma__familiasClient<$Result.GetResult<Prisma.$familiasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Familias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {familiasCountArgs} args - Arguments to filter Familias to count.
     * @example
     * // Count the number of Familias
     * const count = await prisma.familias.count({
     *   where: {
     *     // ... the filter for the Familias we want to count
     *   }
     * })
    **/
    count<T extends familiasCountArgs>(
      args?: Subset<T, familiasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FamiliasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Familias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamiliasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FamiliasAggregateArgs>(args: Subset<T, FamiliasAggregateArgs>): Prisma.PrismaPromise<GetFamiliasAggregateType<T>>

    /**
     * Group by Familias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {familiasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends familiasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: familiasGroupByArgs['orderBy'] }
        : { orderBy?: familiasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, familiasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFamiliasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the familias model
   */
  readonly fields: familiasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for familias.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__familiasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    socios<T extends familias$sociosArgs<ExtArgs> = {}>(args?: Subset<T, familias$sociosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sociosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the familias model
   */
  interface familiasFieldRefs {
    readonly id: FieldRef<"familias", 'Int'>
    readonly nombre_familia: FieldRef<"familias", 'String'>
    readonly fecha_alta: FieldRef<"familias", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * familias findUnique
   */
  export type familiasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the familias
     */
    select?: familiasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the familias
     */
    omit?: familiasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: familiasInclude<ExtArgs> | null
    /**
     * Filter, which familias to fetch.
     */
    where: familiasWhereUniqueInput
  }

  /**
   * familias findUniqueOrThrow
   */
  export type familiasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the familias
     */
    select?: familiasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the familias
     */
    omit?: familiasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: familiasInclude<ExtArgs> | null
    /**
     * Filter, which familias to fetch.
     */
    where: familiasWhereUniqueInput
  }

  /**
   * familias findFirst
   */
  export type familiasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the familias
     */
    select?: familiasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the familias
     */
    omit?: familiasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: familiasInclude<ExtArgs> | null
    /**
     * Filter, which familias to fetch.
     */
    where?: familiasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of familias to fetch.
     */
    orderBy?: familiasOrderByWithRelationInput | familiasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for familias.
     */
    cursor?: familiasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` familias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` familias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of familias.
     */
    distinct?: FamiliasScalarFieldEnum | FamiliasScalarFieldEnum[]
  }

  /**
   * familias findFirstOrThrow
   */
  export type familiasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the familias
     */
    select?: familiasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the familias
     */
    omit?: familiasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: familiasInclude<ExtArgs> | null
    /**
     * Filter, which familias to fetch.
     */
    where?: familiasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of familias to fetch.
     */
    orderBy?: familiasOrderByWithRelationInput | familiasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for familias.
     */
    cursor?: familiasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` familias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` familias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of familias.
     */
    distinct?: FamiliasScalarFieldEnum | FamiliasScalarFieldEnum[]
  }

  /**
   * familias findMany
   */
  export type familiasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the familias
     */
    select?: familiasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the familias
     */
    omit?: familiasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: familiasInclude<ExtArgs> | null
    /**
     * Filter, which familias to fetch.
     */
    where?: familiasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of familias to fetch.
     */
    orderBy?: familiasOrderByWithRelationInput | familiasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing familias.
     */
    cursor?: familiasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` familias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` familias.
     */
    skip?: number
    distinct?: FamiliasScalarFieldEnum | FamiliasScalarFieldEnum[]
  }

  /**
   * familias create
   */
  export type familiasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the familias
     */
    select?: familiasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the familias
     */
    omit?: familiasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: familiasInclude<ExtArgs> | null
    /**
     * The data needed to create a familias.
     */
    data: XOR<familiasCreateInput, familiasUncheckedCreateInput>
  }

  /**
   * familias createMany
   */
  export type familiasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many familias.
     */
    data: familiasCreateManyInput | familiasCreateManyInput[]
  }

  /**
   * familias update
   */
  export type familiasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the familias
     */
    select?: familiasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the familias
     */
    omit?: familiasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: familiasInclude<ExtArgs> | null
    /**
     * The data needed to update a familias.
     */
    data: XOR<familiasUpdateInput, familiasUncheckedUpdateInput>
    /**
     * Choose, which familias to update.
     */
    where: familiasWhereUniqueInput
  }

  /**
   * familias updateMany
   */
  export type familiasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update familias.
     */
    data: XOR<familiasUpdateManyMutationInput, familiasUncheckedUpdateManyInput>
    /**
     * Filter which familias to update
     */
    where?: familiasWhereInput
    /**
     * Limit how many familias to update.
     */
    limit?: number
  }

  /**
   * familias upsert
   */
  export type familiasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the familias
     */
    select?: familiasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the familias
     */
    omit?: familiasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: familiasInclude<ExtArgs> | null
    /**
     * The filter to search for the familias to update in case it exists.
     */
    where: familiasWhereUniqueInput
    /**
     * In case the familias found by the `where` argument doesn't exist, create a new familias with this data.
     */
    create: XOR<familiasCreateInput, familiasUncheckedCreateInput>
    /**
     * In case the familias was found with the provided `where` argument, update it with this data.
     */
    update: XOR<familiasUpdateInput, familiasUncheckedUpdateInput>
  }

  /**
   * familias delete
   */
  export type familiasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the familias
     */
    select?: familiasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the familias
     */
    omit?: familiasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: familiasInclude<ExtArgs> | null
    /**
     * Filter which familias to delete.
     */
    where: familiasWhereUniqueInput
  }

  /**
   * familias deleteMany
   */
  export type familiasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which familias to delete
     */
    where?: familiasWhereInput
    /**
     * Limit how many familias to delete.
     */
    limit?: number
  }

  /**
   * familias.socios
   */
  export type familias$sociosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the socios
     */
    select?: sociosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the socios
     */
    omit?: sociosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sociosInclude<ExtArgs> | null
    where?: sociosWhereInput
    orderBy?: sociosOrderByWithRelationInput | sociosOrderByWithRelationInput[]
    cursor?: sociosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SociosScalarFieldEnum | SociosScalarFieldEnum[]
  }

  /**
   * familias without action
   */
  export type familiasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the familias
     */
    select?: familiasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the familias
     */
    omit?: familiasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: familiasInclude<ExtArgs> | null
  }


  /**
   * Model inscripciones
   */

  export type AggregateInscripciones = {
    _count: InscripcionesCountAggregateOutputType | null
    _avg: InscripcionesAvgAggregateOutputType | null
    _sum: InscripcionesSumAggregateOutputType | null
    _min: InscripcionesMinAggregateOutputType | null
    _max: InscripcionesMaxAggregateOutputType | null
  }

  export type InscripcionesAvgAggregateOutputType = {
    id: number | null
    id_socio: number | null
    id_actividad: number | null
  }

  export type InscripcionesSumAggregateOutputType = {
    id: number | null
    id_socio: number | null
    id_actividad: number | null
  }

  export type InscripcionesMinAggregateOutputType = {
    id: number | null
    id_socio: number | null
    id_actividad: number | null
    fecha_inscripcion: Date | null
    pagado: boolean | null
    fecha_pago: Date | null
  }

  export type InscripcionesMaxAggregateOutputType = {
    id: number | null
    id_socio: number | null
    id_actividad: number | null
    fecha_inscripcion: Date | null
    pagado: boolean | null
    fecha_pago: Date | null
  }

  export type InscripcionesCountAggregateOutputType = {
    id: number
    id_socio: number
    id_actividad: number
    fecha_inscripcion: number
    pagado: number
    fecha_pago: number
    _all: number
  }


  export type InscripcionesAvgAggregateInputType = {
    id?: true
    id_socio?: true
    id_actividad?: true
  }

  export type InscripcionesSumAggregateInputType = {
    id?: true
    id_socio?: true
    id_actividad?: true
  }

  export type InscripcionesMinAggregateInputType = {
    id?: true
    id_socio?: true
    id_actividad?: true
    fecha_inscripcion?: true
    pagado?: true
    fecha_pago?: true
  }

  export type InscripcionesMaxAggregateInputType = {
    id?: true
    id_socio?: true
    id_actividad?: true
    fecha_inscripcion?: true
    pagado?: true
    fecha_pago?: true
  }

  export type InscripcionesCountAggregateInputType = {
    id?: true
    id_socio?: true
    id_actividad?: true
    fecha_inscripcion?: true
    pagado?: true
    fecha_pago?: true
    _all?: true
  }

  export type InscripcionesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inscripciones to aggregate.
     */
    where?: inscripcionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inscripciones to fetch.
     */
    orderBy?: inscripcionesOrderByWithRelationInput | inscripcionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: inscripcionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inscripciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inscripciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned inscripciones
    **/
    _count?: true | InscripcionesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InscripcionesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InscripcionesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InscripcionesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InscripcionesMaxAggregateInputType
  }

  export type GetInscripcionesAggregateType<T extends InscripcionesAggregateArgs> = {
        [P in keyof T & keyof AggregateInscripciones]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInscripciones[P]>
      : GetScalarType<T[P], AggregateInscripciones[P]>
  }




  export type inscripcionesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: inscripcionesWhereInput
    orderBy?: inscripcionesOrderByWithAggregationInput | inscripcionesOrderByWithAggregationInput[]
    by: InscripcionesScalarFieldEnum[] | InscripcionesScalarFieldEnum
    having?: inscripcionesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InscripcionesCountAggregateInputType | true
    _avg?: InscripcionesAvgAggregateInputType
    _sum?: InscripcionesSumAggregateInputType
    _min?: InscripcionesMinAggregateInputType
    _max?: InscripcionesMaxAggregateInputType
  }

  export type InscripcionesGroupByOutputType = {
    id: number
    id_socio: number | null
    id_actividad: number | null
    fecha_inscripcion: Date
    pagado: boolean | null
    fecha_pago: Date | null
    _count: InscripcionesCountAggregateOutputType | null
    _avg: InscripcionesAvgAggregateOutputType | null
    _sum: InscripcionesSumAggregateOutputType | null
    _min: InscripcionesMinAggregateOutputType | null
    _max: InscripcionesMaxAggregateOutputType | null
  }

  type GetInscripcionesGroupByPayload<T extends inscripcionesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InscripcionesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InscripcionesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InscripcionesGroupByOutputType[P]>
            : GetScalarType<T[P], InscripcionesGroupByOutputType[P]>
        }
      >
    >


  export type inscripcionesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_socio?: boolean
    id_actividad?: boolean
    fecha_inscripcion?: boolean
    pagado?: boolean
    fecha_pago?: boolean
    actividades?: boolean | inscripciones$actividadesArgs<ExtArgs>
    socios?: boolean | inscripciones$sociosArgs<ExtArgs>
  }, ExtArgs["result"]["inscripciones"]>



  export type inscripcionesSelectScalar = {
    id?: boolean
    id_socio?: boolean
    id_actividad?: boolean
    fecha_inscripcion?: boolean
    pagado?: boolean
    fecha_pago?: boolean
  }

  export type inscripcionesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_socio" | "id_actividad" | "fecha_inscripcion" | "pagado" | "fecha_pago", ExtArgs["result"]["inscripciones"]>
  export type inscripcionesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actividades?: boolean | inscripciones$actividadesArgs<ExtArgs>
    socios?: boolean | inscripciones$sociosArgs<ExtArgs>
  }

  export type $inscripcionesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "inscripciones"
    objects: {
      actividades: Prisma.$actividadesPayload<ExtArgs> | null
      socios: Prisma.$sociosPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_socio: number | null
      id_actividad: number | null
      fecha_inscripcion: Date
      pagado: boolean | null
      fecha_pago: Date | null
    }, ExtArgs["result"]["inscripciones"]>
    composites: {}
  }

  type inscripcionesGetPayload<S extends boolean | null | undefined | inscripcionesDefaultArgs> = $Result.GetResult<Prisma.$inscripcionesPayload, S>

  type inscripcionesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<inscripcionesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InscripcionesCountAggregateInputType | true
    }

  export interface inscripcionesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['inscripciones'], meta: { name: 'inscripciones' } }
    /**
     * Find zero or one Inscripciones that matches the filter.
     * @param {inscripcionesFindUniqueArgs} args - Arguments to find a Inscripciones
     * @example
     * // Get one Inscripciones
     * const inscripciones = await prisma.inscripciones.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends inscripcionesFindUniqueArgs>(args: SelectSubset<T, inscripcionesFindUniqueArgs<ExtArgs>>): Prisma__inscripcionesClient<$Result.GetResult<Prisma.$inscripcionesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Inscripciones that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {inscripcionesFindUniqueOrThrowArgs} args - Arguments to find a Inscripciones
     * @example
     * // Get one Inscripciones
     * const inscripciones = await prisma.inscripciones.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends inscripcionesFindUniqueOrThrowArgs>(args: SelectSubset<T, inscripcionesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__inscripcionesClient<$Result.GetResult<Prisma.$inscripcionesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inscripciones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inscripcionesFindFirstArgs} args - Arguments to find a Inscripciones
     * @example
     * // Get one Inscripciones
     * const inscripciones = await prisma.inscripciones.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends inscripcionesFindFirstArgs>(args?: SelectSubset<T, inscripcionesFindFirstArgs<ExtArgs>>): Prisma__inscripcionesClient<$Result.GetResult<Prisma.$inscripcionesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inscripciones that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inscripcionesFindFirstOrThrowArgs} args - Arguments to find a Inscripciones
     * @example
     * // Get one Inscripciones
     * const inscripciones = await prisma.inscripciones.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends inscripcionesFindFirstOrThrowArgs>(args?: SelectSubset<T, inscripcionesFindFirstOrThrowArgs<ExtArgs>>): Prisma__inscripcionesClient<$Result.GetResult<Prisma.$inscripcionesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Inscripciones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inscripcionesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inscripciones
     * const inscripciones = await prisma.inscripciones.findMany()
     * 
     * // Get first 10 Inscripciones
     * const inscripciones = await prisma.inscripciones.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inscripcionesWithIdOnly = await prisma.inscripciones.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends inscripcionesFindManyArgs>(args?: SelectSubset<T, inscripcionesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inscripcionesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Inscripciones.
     * @param {inscripcionesCreateArgs} args - Arguments to create a Inscripciones.
     * @example
     * // Create one Inscripciones
     * const Inscripciones = await prisma.inscripciones.create({
     *   data: {
     *     // ... data to create a Inscripciones
     *   }
     * })
     * 
     */
    create<T extends inscripcionesCreateArgs>(args: SelectSubset<T, inscripcionesCreateArgs<ExtArgs>>): Prisma__inscripcionesClient<$Result.GetResult<Prisma.$inscripcionesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Inscripciones.
     * @param {inscripcionesCreateManyArgs} args - Arguments to create many Inscripciones.
     * @example
     * // Create many Inscripciones
     * const inscripciones = await prisma.inscripciones.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends inscripcionesCreateManyArgs>(args?: SelectSubset<T, inscripcionesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Inscripciones.
     * @param {inscripcionesDeleteArgs} args - Arguments to delete one Inscripciones.
     * @example
     * // Delete one Inscripciones
     * const Inscripciones = await prisma.inscripciones.delete({
     *   where: {
     *     // ... filter to delete one Inscripciones
     *   }
     * })
     * 
     */
    delete<T extends inscripcionesDeleteArgs>(args: SelectSubset<T, inscripcionesDeleteArgs<ExtArgs>>): Prisma__inscripcionesClient<$Result.GetResult<Prisma.$inscripcionesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Inscripciones.
     * @param {inscripcionesUpdateArgs} args - Arguments to update one Inscripciones.
     * @example
     * // Update one Inscripciones
     * const inscripciones = await prisma.inscripciones.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends inscripcionesUpdateArgs>(args: SelectSubset<T, inscripcionesUpdateArgs<ExtArgs>>): Prisma__inscripcionesClient<$Result.GetResult<Prisma.$inscripcionesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Inscripciones.
     * @param {inscripcionesDeleteManyArgs} args - Arguments to filter Inscripciones to delete.
     * @example
     * // Delete a few Inscripciones
     * const { count } = await prisma.inscripciones.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends inscripcionesDeleteManyArgs>(args?: SelectSubset<T, inscripcionesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inscripciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inscripcionesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inscripciones
     * const inscripciones = await prisma.inscripciones.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends inscripcionesUpdateManyArgs>(args: SelectSubset<T, inscripcionesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Inscripciones.
     * @param {inscripcionesUpsertArgs} args - Arguments to update or create a Inscripciones.
     * @example
     * // Update or create a Inscripciones
     * const inscripciones = await prisma.inscripciones.upsert({
     *   create: {
     *     // ... data to create a Inscripciones
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inscripciones we want to update
     *   }
     * })
     */
    upsert<T extends inscripcionesUpsertArgs>(args: SelectSubset<T, inscripcionesUpsertArgs<ExtArgs>>): Prisma__inscripcionesClient<$Result.GetResult<Prisma.$inscripcionesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Inscripciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inscripcionesCountArgs} args - Arguments to filter Inscripciones to count.
     * @example
     * // Count the number of Inscripciones
     * const count = await prisma.inscripciones.count({
     *   where: {
     *     // ... the filter for the Inscripciones we want to count
     *   }
     * })
    **/
    count<T extends inscripcionesCountArgs>(
      args?: Subset<T, inscripcionesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InscripcionesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inscripciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InscripcionesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InscripcionesAggregateArgs>(args: Subset<T, InscripcionesAggregateArgs>): Prisma.PrismaPromise<GetInscripcionesAggregateType<T>>

    /**
     * Group by Inscripciones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inscripcionesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends inscripcionesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: inscripcionesGroupByArgs['orderBy'] }
        : { orderBy?: inscripcionesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, inscripcionesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInscripcionesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the inscripciones model
   */
  readonly fields: inscripcionesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for inscripciones.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__inscripcionesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    actividades<T extends inscripciones$actividadesArgs<ExtArgs> = {}>(args?: Subset<T, inscripciones$actividadesArgs<ExtArgs>>): Prisma__actividadesClient<$Result.GetResult<Prisma.$actividadesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    socios<T extends inscripciones$sociosArgs<ExtArgs> = {}>(args?: Subset<T, inscripciones$sociosArgs<ExtArgs>>): Prisma__sociosClient<$Result.GetResult<Prisma.$sociosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the inscripciones model
   */
  interface inscripcionesFieldRefs {
    readonly id: FieldRef<"inscripciones", 'Int'>
    readonly id_socio: FieldRef<"inscripciones", 'Int'>
    readonly id_actividad: FieldRef<"inscripciones", 'Int'>
    readonly fecha_inscripcion: FieldRef<"inscripciones", 'DateTime'>
    readonly pagado: FieldRef<"inscripciones", 'Boolean'>
    readonly fecha_pago: FieldRef<"inscripciones", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * inscripciones findUnique
   */
  export type inscripcionesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inscripciones
     */
    select?: inscripcionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inscripciones
     */
    omit?: inscripcionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inscripcionesInclude<ExtArgs> | null
    /**
     * Filter, which inscripciones to fetch.
     */
    where: inscripcionesWhereUniqueInput
  }

  /**
   * inscripciones findUniqueOrThrow
   */
  export type inscripcionesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inscripciones
     */
    select?: inscripcionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inscripciones
     */
    omit?: inscripcionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inscripcionesInclude<ExtArgs> | null
    /**
     * Filter, which inscripciones to fetch.
     */
    where: inscripcionesWhereUniqueInput
  }

  /**
   * inscripciones findFirst
   */
  export type inscripcionesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inscripciones
     */
    select?: inscripcionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inscripciones
     */
    omit?: inscripcionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inscripcionesInclude<ExtArgs> | null
    /**
     * Filter, which inscripciones to fetch.
     */
    where?: inscripcionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inscripciones to fetch.
     */
    orderBy?: inscripcionesOrderByWithRelationInput | inscripcionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for inscripciones.
     */
    cursor?: inscripcionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inscripciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inscripciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inscripciones.
     */
    distinct?: InscripcionesScalarFieldEnum | InscripcionesScalarFieldEnum[]
  }

  /**
   * inscripciones findFirstOrThrow
   */
  export type inscripcionesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inscripciones
     */
    select?: inscripcionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inscripciones
     */
    omit?: inscripcionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inscripcionesInclude<ExtArgs> | null
    /**
     * Filter, which inscripciones to fetch.
     */
    where?: inscripcionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inscripciones to fetch.
     */
    orderBy?: inscripcionesOrderByWithRelationInput | inscripcionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for inscripciones.
     */
    cursor?: inscripcionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inscripciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inscripciones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inscripciones.
     */
    distinct?: InscripcionesScalarFieldEnum | InscripcionesScalarFieldEnum[]
  }

  /**
   * inscripciones findMany
   */
  export type inscripcionesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inscripciones
     */
    select?: inscripcionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inscripciones
     */
    omit?: inscripcionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inscripcionesInclude<ExtArgs> | null
    /**
     * Filter, which inscripciones to fetch.
     */
    where?: inscripcionesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inscripciones to fetch.
     */
    orderBy?: inscripcionesOrderByWithRelationInput | inscripcionesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing inscripciones.
     */
    cursor?: inscripcionesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inscripciones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inscripciones.
     */
    skip?: number
    distinct?: InscripcionesScalarFieldEnum | InscripcionesScalarFieldEnum[]
  }

  /**
   * inscripciones create
   */
  export type inscripcionesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inscripciones
     */
    select?: inscripcionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inscripciones
     */
    omit?: inscripcionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inscripcionesInclude<ExtArgs> | null
    /**
     * The data needed to create a inscripciones.
     */
    data?: XOR<inscripcionesCreateInput, inscripcionesUncheckedCreateInput>
  }

  /**
   * inscripciones createMany
   */
  export type inscripcionesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many inscripciones.
     */
    data: inscripcionesCreateManyInput | inscripcionesCreateManyInput[]
  }

  /**
   * inscripciones update
   */
  export type inscripcionesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inscripciones
     */
    select?: inscripcionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inscripciones
     */
    omit?: inscripcionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inscripcionesInclude<ExtArgs> | null
    /**
     * The data needed to update a inscripciones.
     */
    data: XOR<inscripcionesUpdateInput, inscripcionesUncheckedUpdateInput>
    /**
     * Choose, which inscripciones to update.
     */
    where: inscripcionesWhereUniqueInput
  }

  /**
   * inscripciones updateMany
   */
  export type inscripcionesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update inscripciones.
     */
    data: XOR<inscripcionesUpdateManyMutationInput, inscripcionesUncheckedUpdateManyInput>
    /**
     * Filter which inscripciones to update
     */
    where?: inscripcionesWhereInput
    /**
     * Limit how many inscripciones to update.
     */
    limit?: number
  }

  /**
   * inscripciones upsert
   */
  export type inscripcionesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inscripciones
     */
    select?: inscripcionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inscripciones
     */
    omit?: inscripcionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inscripcionesInclude<ExtArgs> | null
    /**
     * The filter to search for the inscripciones to update in case it exists.
     */
    where: inscripcionesWhereUniqueInput
    /**
     * In case the inscripciones found by the `where` argument doesn't exist, create a new inscripciones with this data.
     */
    create: XOR<inscripcionesCreateInput, inscripcionesUncheckedCreateInput>
    /**
     * In case the inscripciones was found with the provided `where` argument, update it with this data.
     */
    update: XOR<inscripcionesUpdateInput, inscripcionesUncheckedUpdateInput>
  }

  /**
   * inscripciones delete
   */
  export type inscripcionesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inscripciones
     */
    select?: inscripcionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inscripciones
     */
    omit?: inscripcionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inscripcionesInclude<ExtArgs> | null
    /**
     * Filter which inscripciones to delete.
     */
    where: inscripcionesWhereUniqueInput
  }

  /**
   * inscripciones deleteMany
   */
  export type inscripcionesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inscripciones to delete
     */
    where?: inscripcionesWhereInput
    /**
     * Limit how many inscripciones to delete.
     */
    limit?: number
  }

  /**
   * inscripciones.actividades
   */
  export type inscripciones$actividadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actividades
     */
    select?: actividadesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the actividades
     */
    omit?: actividadesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actividadesInclude<ExtArgs> | null
    where?: actividadesWhereInput
  }

  /**
   * inscripciones.socios
   */
  export type inscripciones$sociosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the socios
     */
    select?: sociosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the socios
     */
    omit?: sociosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sociosInclude<ExtArgs> | null
    where?: sociosWhereInput
  }

  /**
   * inscripciones without action
   */
  export type inscripcionesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inscripciones
     */
    select?: inscripcionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inscripciones
     */
    omit?: inscripcionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inscripcionesInclude<ExtArgs> | null
  }


  /**
   * Model saldos
   */

  export type AggregateSaldos = {
    _count: SaldosCountAggregateOutputType | null
    _avg: SaldosAvgAggregateOutputType | null
    _sum: SaldosSumAggregateOutputType | null
    _min: SaldosMinAggregateOutputType | null
    _max: SaldosMaxAggregateOutputType | null
  }

  export type SaldosAvgAggregateOutputType = {
    id: number | null
    id_socio: number | null
    monto: Decimal | null
  }

  export type SaldosSumAggregateOutputType = {
    id: number | null
    id_socio: number | null
    monto: Decimal | null
  }

  export type SaldosMinAggregateOutputType = {
    id: number | null
    id_socio: number | null
    descripcion: string | null
    monto: Decimal | null
    fecha: Date | null
    tipo_movimiento: string | null
  }

  export type SaldosMaxAggregateOutputType = {
    id: number | null
    id_socio: number | null
    descripcion: string | null
    monto: Decimal | null
    fecha: Date | null
    tipo_movimiento: string | null
  }

  export type SaldosCountAggregateOutputType = {
    id: number
    id_socio: number
    descripcion: number
    monto: number
    fecha: number
    tipo_movimiento: number
    _all: number
  }


  export type SaldosAvgAggregateInputType = {
    id?: true
    id_socio?: true
    monto?: true
  }

  export type SaldosSumAggregateInputType = {
    id?: true
    id_socio?: true
    monto?: true
  }

  export type SaldosMinAggregateInputType = {
    id?: true
    id_socio?: true
    descripcion?: true
    monto?: true
    fecha?: true
    tipo_movimiento?: true
  }

  export type SaldosMaxAggregateInputType = {
    id?: true
    id_socio?: true
    descripcion?: true
    monto?: true
    fecha?: true
    tipo_movimiento?: true
  }

  export type SaldosCountAggregateInputType = {
    id?: true
    id_socio?: true
    descripcion?: true
    monto?: true
    fecha?: true
    tipo_movimiento?: true
    _all?: true
  }

  export type SaldosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which saldos to aggregate.
     */
    where?: saldosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of saldos to fetch.
     */
    orderBy?: saldosOrderByWithRelationInput | saldosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: saldosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` saldos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` saldos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned saldos
    **/
    _count?: true | SaldosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SaldosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SaldosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SaldosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SaldosMaxAggregateInputType
  }

  export type GetSaldosAggregateType<T extends SaldosAggregateArgs> = {
        [P in keyof T & keyof AggregateSaldos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSaldos[P]>
      : GetScalarType<T[P], AggregateSaldos[P]>
  }




  export type saldosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: saldosWhereInput
    orderBy?: saldosOrderByWithAggregationInput | saldosOrderByWithAggregationInput[]
    by: SaldosScalarFieldEnum[] | SaldosScalarFieldEnum
    having?: saldosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SaldosCountAggregateInputType | true
    _avg?: SaldosAvgAggregateInputType
    _sum?: SaldosSumAggregateInputType
    _min?: SaldosMinAggregateInputType
    _max?: SaldosMaxAggregateInputType
  }

  export type SaldosGroupByOutputType = {
    id: number
    id_socio: number | null
    descripcion: string
    monto: Decimal
    fecha: Date
    tipo_movimiento: string | null
    _count: SaldosCountAggregateOutputType | null
    _avg: SaldosAvgAggregateOutputType | null
    _sum: SaldosSumAggregateOutputType | null
    _min: SaldosMinAggregateOutputType | null
    _max: SaldosMaxAggregateOutputType | null
  }

  type GetSaldosGroupByPayload<T extends saldosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SaldosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SaldosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SaldosGroupByOutputType[P]>
            : GetScalarType<T[P], SaldosGroupByOutputType[P]>
        }
      >
    >


  export type saldosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_socio?: boolean
    descripcion?: boolean
    monto?: boolean
    fecha?: boolean
    tipo_movimiento?: boolean
    socios?: boolean | saldos$sociosArgs<ExtArgs>
  }, ExtArgs["result"]["saldos"]>



  export type saldosSelectScalar = {
    id?: boolean
    id_socio?: boolean
    descripcion?: boolean
    monto?: boolean
    fecha?: boolean
    tipo_movimiento?: boolean
  }

  export type saldosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_socio" | "descripcion" | "monto" | "fecha" | "tipo_movimiento", ExtArgs["result"]["saldos"]>
  export type saldosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    socios?: boolean | saldos$sociosArgs<ExtArgs>
  }

  export type $saldosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "saldos"
    objects: {
      socios: Prisma.$sociosPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_socio: number | null
      descripcion: string
      monto: Prisma.Decimal
      fecha: Date
      tipo_movimiento: string | null
    }, ExtArgs["result"]["saldos"]>
    composites: {}
  }

  type saldosGetPayload<S extends boolean | null | undefined | saldosDefaultArgs> = $Result.GetResult<Prisma.$saldosPayload, S>

  type saldosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<saldosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SaldosCountAggregateInputType | true
    }

  export interface saldosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['saldos'], meta: { name: 'saldos' } }
    /**
     * Find zero or one Saldos that matches the filter.
     * @param {saldosFindUniqueArgs} args - Arguments to find a Saldos
     * @example
     * // Get one Saldos
     * const saldos = await prisma.saldos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends saldosFindUniqueArgs>(args: SelectSubset<T, saldosFindUniqueArgs<ExtArgs>>): Prisma__saldosClient<$Result.GetResult<Prisma.$saldosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Saldos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {saldosFindUniqueOrThrowArgs} args - Arguments to find a Saldos
     * @example
     * // Get one Saldos
     * const saldos = await prisma.saldos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends saldosFindUniqueOrThrowArgs>(args: SelectSubset<T, saldosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__saldosClient<$Result.GetResult<Prisma.$saldosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Saldos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {saldosFindFirstArgs} args - Arguments to find a Saldos
     * @example
     * // Get one Saldos
     * const saldos = await prisma.saldos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends saldosFindFirstArgs>(args?: SelectSubset<T, saldosFindFirstArgs<ExtArgs>>): Prisma__saldosClient<$Result.GetResult<Prisma.$saldosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Saldos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {saldosFindFirstOrThrowArgs} args - Arguments to find a Saldos
     * @example
     * // Get one Saldos
     * const saldos = await prisma.saldos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends saldosFindFirstOrThrowArgs>(args?: SelectSubset<T, saldosFindFirstOrThrowArgs<ExtArgs>>): Prisma__saldosClient<$Result.GetResult<Prisma.$saldosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Saldos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {saldosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Saldos
     * const saldos = await prisma.saldos.findMany()
     * 
     * // Get first 10 Saldos
     * const saldos = await prisma.saldos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const saldosWithIdOnly = await prisma.saldos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends saldosFindManyArgs>(args?: SelectSubset<T, saldosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$saldosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Saldos.
     * @param {saldosCreateArgs} args - Arguments to create a Saldos.
     * @example
     * // Create one Saldos
     * const Saldos = await prisma.saldos.create({
     *   data: {
     *     // ... data to create a Saldos
     *   }
     * })
     * 
     */
    create<T extends saldosCreateArgs>(args: SelectSubset<T, saldosCreateArgs<ExtArgs>>): Prisma__saldosClient<$Result.GetResult<Prisma.$saldosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Saldos.
     * @param {saldosCreateManyArgs} args - Arguments to create many Saldos.
     * @example
     * // Create many Saldos
     * const saldos = await prisma.saldos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends saldosCreateManyArgs>(args?: SelectSubset<T, saldosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Saldos.
     * @param {saldosDeleteArgs} args - Arguments to delete one Saldos.
     * @example
     * // Delete one Saldos
     * const Saldos = await prisma.saldos.delete({
     *   where: {
     *     // ... filter to delete one Saldos
     *   }
     * })
     * 
     */
    delete<T extends saldosDeleteArgs>(args: SelectSubset<T, saldosDeleteArgs<ExtArgs>>): Prisma__saldosClient<$Result.GetResult<Prisma.$saldosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Saldos.
     * @param {saldosUpdateArgs} args - Arguments to update one Saldos.
     * @example
     * // Update one Saldos
     * const saldos = await prisma.saldos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends saldosUpdateArgs>(args: SelectSubset<T, saldosUpdateArgs<ExtArgs>>): Prisma__saldosClient<$Result.GetResult<Prisma.$saldosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Saldos.
     * @param {saldosDeleteManyArgs} args - Arguments to filter Saldos to delete.
     * @example
     * // Delete a few Saldos
     * const { count } = await prisma.saldos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends saldosDeleteManyArgs>(args?: SelectSubset<T, saldosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Saldos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {saldosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Saldos
     * const saldos = await prisma.saldos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends saldosUpdateManyArgs>(args: SelectSubset<T, saldosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Saldos.
     * @param {saldosUpsertArgs} args - Arguments to update or create a Saldos.
     * @example
     * // Update or create a Saldos
     * const saldos = await prisma.saldos.upsert({
     *   create: {
     *     // ... data to create a Saldos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Saldos we want to update
     *   }
     * })
     */
    upsert<T extends saldosUpsertArgs>(args: SelectSubset<T, saldosUpsertArgs<ExtArgs>>): Prisma__saldosClient<$Result.GetResult<Prisma.$saldosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Saldos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {saldosCountArgs} args - Arguments to filter Saldos to count.
     * @example
     * // Count the number of Saldos
     * const count = await prisma.saldos.count({
     *   where: {
     *     // ... the filter for the Saldos we want to count
     *   }
     * })
    **/
    count<T extends saldosCountArgs>(
      args?: Subset<T, saldosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SaldosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Saldos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaldosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SaldosAggregateArgs>(args: Subset<T, SaldosAggregateArgs>): Prisma.PrismaPromise<GetSaldosAggregateType<T>>

    /**
     * Group by Saldos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {saldosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends saldosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: saldosGroupByArgs['orderBy'] }
        : { orderBy?: saldosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, saldosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSaldosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the saldos model
   */
  readonly fields: saldosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for saldos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__saldosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    socios<T extends saldos$sociosArgs<ExtArgs> = {}>(args?: Subset<T, saldos$sociosArgs<ExtArgs>>): Prisma__sociosClient<$Result.GetResult<Prisma.$sociosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the saldos model
   */
  interface saldosFieldRefs {
    readonly id: FieldRef<"saldos", 'Int'>
    readonly id_socio: FieldRef<"saldos", 'Int'>
    readonly descripcion: FieldRef<"saldos", 'String'>
    readonly monto: FieldRef<"saldos", 'Decimal'>
    readonly fecha: FieldRef<"saldos", 'DateTime'>
    readonly tipo_movimiento: FieldRef<"saldos", 'String'>
  }
    

  // Custom InputTypes
  /**
   * saldos findUnique
   */
  export type saldosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saldos
     */
    select?: saldosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saldos
     */
    omit?: saldosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saldosInclude<ExtArgs> | null
    /**
     * Filter, which saldos to fetch.
     */
    where: saldosWhereUniqueInput
  }

  /**
   * saldos findUniqueOrThrow
   */
  export type saldosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saldos
     */
    select?: saldosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saldos
     */
    omit?: saldosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saldosInclude<ExtArgs> | null
    /**
     * Filter, which saldos to fetch.
     */
    where: saldosWhereUniqueInput
  }

  /**
   * saldos findFirst
   */
  export type saldosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saldos
     */
    select?: saldosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saldos
     */
    omit?: saldosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saldosInclude<ExtArgs> | null
    /**
     * Filter, which saldos to fetch.
     */
    where?: saldosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of saldos to fetch.
     */
    orderBy?: saldosOrderByWithRelationInput | saldosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for saldos.
     */
    cursor?: saldosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` saldos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` saldos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of saldos.
     */
    distinct?: SaldosScalarFieldEnum | SaldosScalarFieldEnum[]
  }

  /**
   * saldos findFirstOrThrow
   */
  export type saldosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saldos
     */
    select?: saldosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saldos
     */
    omit?: saldosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saldosInclude<ExtArgs> | null
    /**
     * Filter, which saldos to fetch.
     */
    where?: saldosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of saldos to fetch.
     */
    orderBy?: saldosOrderByWithRelationInput | saldosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for saldos.
     */
    cursor?: saldosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` saldos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` saldos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of saldos.
     */
    distinct?: SaldosScalarFieldEnum | SaldosScalarFieldEnum[]
  }

  /**
   * saldos findMany
   */
  export type saldosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saldos
     */
    select?: saldosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saldos
     */
    omit?: saldosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saldosInclude<ExtArgs> | null
    /**
     * Filter, which saldos to fetch.
     */
    where?: saldosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of saldos to fetch.
     */
    orderBy?: saldosOrderByWithRelationInput | saldosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing saldos.
     */
    cursor?: saldosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` saldos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` saldos.
     */
    skip?: number
    distinct?: SaldosScalarFieldEnum | SaldosScalarFieldEnum[]
  }

  /**
   * saldos create
   */
  export type saldosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saldos
     */
    select?: saldosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saldos
     */
    omit?: saldosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saldosInclude<ExtArgs> | null
    /**
     * The data needed to create a saldos.
     */
    data: XOR<saldosCreateInput, saldosUncheckedCreateInput>
  }

  /**
   * saldos createMany
   */
  export type saldosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many saldos.
     */
    data: saldosCreateManyInput | saldosCreateManyInput[]
  }

  /**
   * saldos update
   */
  export type saldosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saldos
     */
    select?: saldosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saldos
     */
    omit?: saldosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saldosInclude<ExtArgs> | null
    /**
     * The data needed to update a saldos.
     */
    data: XOR<saldosUpdateInput, saldosUncheckedUpdateInput>
    /**
     * Choose, which saldos to update.
     */
    where: saldosWhereUniqueInput
  }

  /**
   * saldos updateMany
   */
  export type saldosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update saldos.
     */
    data: XOR<saldosUpdateManyMutationInput, saldosUncheckedUpdateManyInput>
    /**
     * Filter which saldos to update
     */
    where?: saldosWhereInput
    /**
     * Limit how many saldos to update.
     */
    limit?: number
  }

  /**
   * saldos upsert
   */
  export type saldosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saldos
     */
    select?: saldosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saldos
     */
    omit?: saldosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saldosInclude<ExtArgs> | null
    /**
     * The filter to search for the saldos to update in case it exists.
     */
    where: saldosWhereUniqueInput
    /**
     * In case the saldos found by the `where` argument doesn't exist, create a new saldos with this data.
     */
    create: XOR<saldosCreateInput, saldosUncheckedCreateInput>
    /**
     * In case the saldos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<saldosUpdateInput, saldosUncheckedUpdateInput>
  }

  /**
   * saldos delete
   */
  export type saldosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saldos
     */
    select?: saldosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saldos
     */
    omit?: saldosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saldosInclude<ExtArgs> | null
    /**
     * Filter which saldos to delete.
     */
    where: saldosWhereUniqueInput
  }

  /**
   * saldos deleteMany
   */
  export type saldosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which saldos to delete
     */
    where?: saldosWhereInput
    /**
     * Limit how many saldos to delete.
     */
    limit?: number
  }

  /**
   * saldos.socios
   */
  export type saldos$sociosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the socios
     */
    select?: sociosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the socios
     */
    omit?: sociosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sociosInclude<ExtArgs> | null
    where?: sociosWhereInput
  }

  /**
   * saldos without action
   */
  export type saldosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saldos
     */
    select?: saldosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saldos
     */
    omit?: saldosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saldosInclude<ExtArgs> | null
  }


  /**
   * Model socios
   */

  export type AggregateSocios = {
    _count: SociosCountAggregateOutputType | null
    _avg: SociosAvgAggregateOutputType | null
    _sum: SociosSumAggregateOutputType | null
    _min: SociosMinAggregateOutputType | null
    _max: SociosMaxAggregateOutputType | null
  }

  export type SociosAvgAggregateOutputType = {
    id: number | null
    id_familia: number | null
  }

  export type SociosSumAggregateOutputType = {
    id: number | null
    id_familia: number | null
  }

  export type SociosMinAggregateOutputType = {
    id: number | null
    id_familia: number | null
    nombre: string | null
    apellido: string | null
    dni: string | null
    fecha_nacimiento: Date | null
    celular: string | null
    activo: boolean | null
  }

  export type SociosMaxAggregateOutputType = {
    id: number | null
    id_familia: number | null
    nombre: string | null
    apellido: string | null
    dni: string | null
    fecha_nacimiento: Date | null
    celular: string | null
    activo: boolean | null
  }

  export type SociosCountAggregateOutputType = {
    id: number
    id_familia: number
    nombre: number
    apellido: number
    dni: number
    fecha_nacimiento: number
    celular: number
    activo: number
    _all: number
  }


  export type SociosAvgAggregateInputType = {
    id?: true
    id_familia?: true
  }

  export type SociosSumAggregateInputType = {
    id?: true
    id_familia?: true
  }

  export type SociosMinAggregateInputType = {
    id?: true
    id_familia?: true
    nombre?: true
    apellido?: true
    dni?: true
    fecha_nacimiento?: true
    celular?: true
    activo?: true
  }

  export type SociosMaxAggregateInputType = {
    id?: true
    id_familia?: true
    nombre?: true
    apellido?: true
    dni?: true
    fecha_nacimiento?: true
    celular?: true
    activo?: true
  }

  export type SociosCountAggregateInputType = {
    id?: true
    id_familia?: true
    nombre?: true
    apellido?: true
    dni?: true
    fecha_nacimiento?: true
    celular?: true
    activo?: true
    _all?: true
  }

  export type SociosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which socios to aggregate.
     */
    where?: sociosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of socios to fetch.
     */
    orderBy?: sociosOrderByWithRelationInput | sociosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sociosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` socios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` socios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned socios
    **/
    _count?: true | SociosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SociosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SociosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SociosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SociosMaxAggregateInputType
  }

  export type GetSociosAggregateType<T extends SociosAggregateArgs> = {
        [P in keyof T & keyof AggregateSocios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSocios[P]>
      : GetScalarType<T[P], AggregateSocios[P]>
  }




  export type sociosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sociosWhereInput
    orderBy?: sociosOrderByWithAggregationInput | sociosOrderByWithAggregationInput[]
    by: SociosScalarFieldEnum[] | SociosScalarFieldEnum
    having?: sociosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SociosCountAggregateInputType | true
    _avg?: SociosAvgAggregateInputType
    _sum?: SociosSumAggregateInputType
    _min?: SociosMinAggregateInputType
    _max?: SociosMaxAggregateInputType
  }

  export type SociosGroupByOutputType = {
    id: number
    id_familia: number | null
    nombre: string
    apellido: string
    dni: string
    fecha_nacimiento: Date | null
    celular: string | null
    activo: boolean | null
    _count: SociosCountAggregateOutputType | null
    _avg: SociosAvgAggregateOutputType | null
    _sum: SociosSumAggregateOutputType | null
    _min: SociosMinAggregateOutputType | null
    _max: SociosMaxAggregateOutputType | null
  }

  type GetSociosGroupByPayload<T extends sociosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SociosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SociosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SociosGroupByOutputType[P]>
            : GetScalarType<T[P], SociosGroupByOutputType[P]>
        }
      >
    >


  export type sociosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_familia?: boolean
    nombre?: boolean
    apellido?: boolean
    dni?: boolean
    fecha_nacimiento?: boolean
    celular?: boolean
    activo?: boolean
    inscripciones?: boolean | socios$inscripcionesArgs<ExtArgs>
    saldos?: boolean | socios$saldosArgs<ExtArgs>
    familias?: boolean | socios$familiasArgs<ExtArgs>
    _count?: boolean | SociosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["socios"]>



  export type sociosSelectScalar = {
    id?: boolean
    id_familia?: boolean
    nombre?: boolean
    apellido?: boolean
    dni?: boolean
    fecha_nacimiento?: boolean
    celular?: boolean
    activo?: boolean
  }

  export type sociosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_familia" | "nombre" | "apellido" | "dni" | "fecha_nacimiento" | "celular" | "activo", ExtArgs["result"]["socios"]>
  export type sociosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inscripciones?: boolean | socios$inscripcionesArgs<ExtArgs>
    saldos?: boolean | socios$saldosArgs<ExtArgs>
    familias?: boolean | socios$familiasArgs<ExtArgs>
    _count?: boolean | SociosCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $sociosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "socios"
    objects: {
      inscripciones: Prisma.$inscripcionesPayload<ExtArgs>[]
      saldos: Prisma.$saldosPayload<ExtArgs>[]
      familias: Prisma.$familiasPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_familia: number | null
      nombre: string
      apellido: string
      dni: string
      fecha_nacimiento: Date | null
      celular: string | null
      activo: boolean | null
    }, ExtArgs["result"]["socios"]>
    composites: {}
  }

  type sociosGetPayload<S extends boolean | null | undefined | sociosDefaultArgs> = $Result.GetResult<Prisma.$sociosPayload, S>

  type sociosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sociosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SociosCountAggregateInputType | true
    }

  export interface sociosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['socios'], meta: { name: 'socios' } }
    /**
     * Find zero or one Socios that matches the filter.
     * @param {sociosFindUniqueArgs} args - Arguments to find a Socios
     * @example
     * // Get one Socios
     * const socios = await prisma.socios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sociosFindUniqueArgs>(args: SelectSubset<T, sociosFindUniqueArgs<ExtArgs>>): Prisma__sociosClient<$Result.GetResult<Prisma.$sociosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Socios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sociosFindUniqueOrThrowArgs} args - Arguments to find a Socios
     * @example
     * // Get one Socios
     * const socios = await prisma.socios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sociosFindUniqueOrThrowArgs>(args: SelectSubset<T, sociosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sociosClient<$Result.GetResult<Prisma.$sociosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Socios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sociosFindFirstArgs} args - Arguments to find a Socios
     * @example
     * // Get one Socios
     * const socios = await prisma.socios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sociosFindFirstArgs>(args?: SelectSubset<T, sociosFindFirstArgs<ExtArgs>>): Prisma__sociosClient<$Result.GetResult<Prisma.$sociosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Socios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sociosFindFirstOrThrowArgs} args - Arguments to find a Socios
     * @example
     * // Get one Socios
     * const socios = await prisma.socios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sociosFindFirstOrThrowArgs>(args?: SelectSubset<T, sociosFindFirstOrThrowArgs<ExtArgs>>): Prisma__sociosClient<$Result.GetResult<Prisma.$sociosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Socios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sociosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Socios
     * const socios = await prisma.socios.findMany()
     * 
     * // Get first 10 Socios
     * const socios = await prisma.socios.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sociosWithIdOnly = await prisma.socios.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends sociosFindManyArgs>(args?: SelectSubset<T, sociosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sociosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Socios.
     * @param {sociosCreateArgs} args - Arguments to create a Socios.
     * @example
     * // Create one Socios
     * const Socios = await prisma.socios.create({
     *   data: {
     *     // ... data to create a Socios
     *   }
     * })
     * 
     */
    create<T extends sociosCreateArgs>(args: SelectSubset<T, sociosCreateArgs<ExtArgs>>): Prisma__sociosClient<$Result.GetResult<Prisma.$sociosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Socios.
     * @param {sociosCreateManyArgs} args - Arguments to create many Socios.
     * @example
     * // Create many Socios
     * const socios = await prisma.socios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sociosCreateManyArgs>(args?: SelectSubset<T, sociosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Socios.
     * @param {sociosDeleteArgs} args - Arguments to delete one Socios.
     * @example
     * // Delete one Socios
     * const Socios = await prisma.socios.delete({
     *   where: {
     *     // ... filter to delete one Socios
     *   }
     * })
     * 
     */
    delete<T extends sociosDeleteArgs>(args: SelectSubset<T, sociosDeleteArgs<ExtArgs>>): Prisma__sociosClient<$Result.GetResult<Prisma.$sociosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Socios.
     * @param {sociosUpdateArgs} args - Arguments to update one Socios.
     * @example
     * // Update one Socios
     * const socios = await prisma.socios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sociosUpdateArgs>(args: SelectSubset<T, sociosUpdateArgs<ExtArgs>>): Prisma__sociosClient<$Result.GetResult<Prisma.$sociosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Socios.
     * @param {sociosDeleteManyArgs} args - Arguments to filter Socios to delete.
     * @example
     * // Delete a few Socios
     * const { count } = await prisma.socios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sociosDeleteManyArgs>(args?: SelectSubset<T, sociosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Socios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sociosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Socios
     * const socios = await prisma.socios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sociosUpdateManyArgs>(args: SelectSubset<T, sociosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Socios.
     * @param {sociosUpsertArgs} args - Arguments to update or create a Socios.
     * @example
     * // Update or create a Socios
     * const socios = await prisma.socios.upsert({
     *   create: {
     *     // ... data to create a Socios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Socios we want to update
     *   }
     * })
     */
    upsert<T extends sociosUpsertArgs>(args: SelectSubset<T, sociosUpsertArgs<ExtArgs>>): Prisma__sociosClient<$Result.GetResult<Prisma.$sociosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Socios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sociosCountArgs} args - Arguments to filter Socios to count.
     * @example
     * // Count the number of Socios
     * const count = await prisma.socios.count({
     *   where: {
     *     // ... the filter for the Socios we want to count
     *   }
     * })
    **/
    count<T extends sociosCountArgs>(
      args?: Subset<T, sociosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SociosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Socios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SociosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SociosAggregateArgs>(args: Subset<T, SociosAggregateArgs>): Prisma.PrismaPromise<GetSociosAggregateType<T>>

    /**
     * Group by Socios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sociosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sociosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sociosGroupByArgs['orderBy'] }
        : { orderBy?: sociosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sociosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSociosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the socios model
   */
  readonly fields: sociosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for socios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sociosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inscripciones<T extends socios$inscripcionesArgs<ExtArgs> = {}>(args?: Subset<T, socios$inscripcionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inscripcionesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    saldos<T extends socios$saldosArgs<ExtArgs> = {}>(args?: Subset<T, socios$saldosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$saldosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    familias<T extends socios$familiasArgs<ExtArgs> = {}>(args?: Subset<T, socios$familiasArgs<ExtArgs>>): Prisma__familiasClient<$Result.GetResult<Prisma.$familiasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the socios model
   */
  interface sociosFieldRefs {
    readonly id: FieldRef<"socios", 'Int'>
    readonly id_familia: FieldRef<"socios", 'Int'>
    readonly nombre: FieldRef<"socios", 'String'>
    readonly apellido: FieldRef<"socios", 'String'>
    readonly dni: FieldRef<"socios", 'String'>
    readonly fecha_nacimiento: FieldRef<"socios", 'DateTime'>
    readonly celular: FieldRef<"socios", 'String'>
    readonly activo: FieldRef<"socios", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * socios findUnique
   */
  export type sociosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the socios
     */
    select?: sociosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the socios
     */
    omit?: sociosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sociosInclude<ExtArgs> | null
    /**
     * Filter, which socios to fetch.
     */
    where: sociosWhereUniqueInput
  }

  /**
   * socios findUniqueOrThrow
   */
  export type sociosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the socios
     */
    select?: sociosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the socios
     */
    omit?: sociosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sociosInclude<ExtArgs> | null
    /**
     * Filter, which socios to fetch.
     */
    where: sociosWhereUniqueInput
  }

  /**
   * socios findFirst
   */
  export type sociosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the socios
     */
    select?: sociosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the socios
     */
    omit?: sociosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sociosInclude<ExtArgs> | null
    /**
     * Filter, which socios to fetch.
     */
    where?: sociosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of socios to fetch.
     */
    orderBy?: sociosOrderByWithRelationInput | sociosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for socios.
     */
    cursor?: sociosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` socios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` socios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of socios.
     */
    distinct?: SociosScalarFieldEnum | SociosScalarFieldEnum[]
  }

  /**
   * socios findFirstOrThrow
   */
  export type sociosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the socios
     */
    select?: sociosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the socios
     */
    omit?: sociosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sociosInclude<ExtArgs> | null
    /**
     * Filter, which socios to fetch.
     */
    where?: sociosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of socios to fetch.
     */
    orderBy?: sociosOrderByWithRelationInput | sociosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for socios.
     */
    cursor?: sociosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` socios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` socios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of socios.
     */
    distinct?: SociosScalarFieldEnum | SociosScalarFieldEnum[]
  }

  /**
   * socios findMany
   */
  export type sociosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the socios
     */
    select?: sociosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the socios
     */
    omit?: sociosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sociosInclude<ExtArgs> | null
    /**
     * Filter, which socios to fetch.
     */
    where?: sociosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of socios to fetch.
     */
    orderBy?: sociosOrderByWithRelationInput | sociosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing socios.
     */
    cursor?: sociosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` socios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` socios.
     */
    skip?: number
    distinct?: SociosScalarFieldEnum | SociosScalarFieldEnum[]
  }

  /**
   * socios create
   */
  export type sociosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the socios
     */
    select?: sociosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the socios
     */
    omit?: sociosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sociosInclude<ExtArgs> | null
    /**
     * The data needed to create a socios.
     */
    data: XOR<sociosCreateInput, sociosUncheckedCreateInput>
  }

  /**
   * socios createMany
   */
  export type sociosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many socios.
     */
    data: sociosCreateManyInput | sociosCreateManyInput[]
  }

  /**
   * socios update
   */
  export type sociosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the socios
     */
    select?: sociosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the socios
     */
    omit?: sociosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sociosInclude<ExtArgs> | null
    /**
     * The data needed to update a socios.
     */
    data: XOR<sociosUpdateInput, sociosUncheckedUpdateInput>
    /**
     * Choose, which socios to update.
     */
    where: sociosWhereUniqueInput
  }

  /**
   * socios updateMany
   */
  export type sociosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update socios.
     */
    data: XOR<sociosUpdateManyMutationInput, sociosUncheckedUpdateManyInput>
    /**
     * Filter which socios to update
     */
    where?: sociosWhereInput
    /**
     * Limit how many socios to update.
     */
    limit?: number
  }

  /**
   * socios upsert
   */
  export type sociosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the socios
     */
    select?: sociosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the socios
     */
    omit?: sociosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sociosInclude<ExtArgs> | null
    /**
     * The filter to search for the socios to update in case it exists.
     */
    where: sociosWhereUniqueInput
    /**
     * In case the socios found by the `where` argument doesn't exist, create a new socios with this data.
     */
    create: XOR<sociosCreateInput, sociosUncheckedCreateInput>
    /**
     * In case the socios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sociosUpdateInput, sociosUncheckedUpdateInput>
  }

  /**
   * socios delete
   */
  export type sociosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the socios
     */
    select?: sociosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the socios
     */
    omit?: sociosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sociosInclude<ExtArgs> | null
    /**
     * Filter which socios to delete.
     */
    where: sociosWhereUniqueInput
  }

  /**
   * socios deleteMany
   */
  export type sociosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which socios to delete
     */
    where?: sociosWhereInput
    /**
     * Limit how many socios to delete.
     */
    limit?: number
  }

  /**
   * socios.inscripciones
   */
  export type socios$inscripcionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inscripciones
     */
    select?: inscripcionesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inscripciones
     */
    omit?: inscripcionesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: inscripcionesInclude<ExtArgs> | null
    where?: inscripcionesWhereInput
    orderBy?: inscripcionesOrderByWithRelationInput | inscripcionesOrderByWithRelationInput[]
    cursor?: inscripcionesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InscripcionesScalarFieldEnum | InscripcionesScalarFieldEnum[]
  }

  /**
   * socios.saldos
   */
  export type socios$saldosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the saldos
     */
    select?: saldosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the saldos
     */
    omit?: saldosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: saldosInclude<ExtArgs> | null
    where?: saldosWhereInput
    orderBy?: saldosOrderByWithRelationInput | saldosOrderByWithRelationInput[]
    cursor?: saldosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaldosScalarFieldEnum | SaldosScalarFieldEnum[]
  }

  /**
   * socios.familias
   */
  export type socios$familiasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the familias
     */
    select?: familiasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the familias
     */
    omit?: familiasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: familiasInclude<ExtArgs> | null
    where?: familiasWhereInput
  }

  /**
   * socios without action
   */
  export type sociosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the socios
     */
    select?: sociosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the socios
     */
    omit?: sociosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sociosInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable',
    Snapshot: 'Snapshot'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ActividadesScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    precio: 'precio',
    activa: 'activa'
  };

  export type ActividadesScalarFieldEnum = (typeof ActividadesScalarFieldEnum)[keyof typeof ActividadesScalarFieldEnum]


  export const FamiliasScalarFieldEnum: {
    id: 'id',
    nombre_familia: 'nombre_familia',
    fecha_alta: 'fecha_alta'
  };

  export type FamiliasScalarFieldEnum = (typeof FamiliasScalarFieldEnum)[keyof typeof FamiliasScalarFieldEnum]


  export const InscripcionesScalarFieldEnum: {
    id: 'id',
    id_socio: 'id_socio',
    id_actividad: 'id_actividad',
    fecha_inscripcion: 'fecha_inscripcion',
    pagado: 'pagado',
    fecha_pago: 'fecha_pago'
  };

  export type InscripcionesScalarFieldEnum = (typeof InscripcionesScalarFieldEnum)[keyof typeof InscripcionesScalarFieldEnum]


  export const SaldosScalarFieldEnum: {
    id: 'id',
    id_socio: 'id_socio',
    descripcion: 'descripcion',
    monto: 'monto',
    fecha: 'fecha',
    tipo_movimiento: 'tipo_movimiento'
  };

  export type SaldosScalarFieldEnum = (typeof SaldosScalarFieldEnum)[keyof typeof SaldosScalarFieldEnum]


  export const SociosScalarFieldEnum: {
    id: 'id',
    id_familia: 'id_familia',
    nombre: 'nombre',
    apellido: 'apellido',
    dni: 'dni',
    fecha_nacimiento: 'fecha_nacimiento',
    celular: 'celular',
    activo: 'activo'
  };

  export type SociosScalarFieldEnum = (typeof SociosScalarFieldEnum)[keyof typeof SociosScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type actividadesWhereInput = {
    AND?: actividadesWhereInput | actividadesWhereInput[]
    OR?: actividadesWhereInput[]
    NOT?: actividadesWhereInput | actividadesWhereInput[]
    id?: IntFilter<"actividades"> | number
    nombre?: StringFilter<"actividades"> | string
    descripcion?: StringNullableFilter<"actividades"> | string | null
    precio?: DecimalFilter<"actividades"> | Decimal | DecimalJsLike | number | string
    activa?: BoolNullableFilter<"actividades"> | boolean | null
    inscripciones?: InscripcionesListRelationFilter
  }

  export type actividadesOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    precio?: SortOrder
    activa?: SortOrderInput | SortOrder
    inscripciones?: inscripcionesOrderByRelationAggregateInput
  }

  export type actividadesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: actividadesWhereInput | actividadesWhereInput[]
    OR?: actividadesWhereInput[]
    NOT?: actividadesWhereInput | actividadesWhereInput[]
    nombre?: StringFilter<"actividades"> | string
    descripcion?: StringNullableFilter<"actividades"> | string | null
    precio?: DecimalFilter<"actividades"> | Decimal | DecimalJsLike | number | string
    activa?: BoolNullableFilter<"actividades"> | boolean | null
    inscripciones?: InscripcionesListRelationFilter
  }, "id">

  export type actividadesOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    precio?: SortOrder
    activa?: SortOrderInput | SortOrder
    _count?: actividadesCountOrderByAggregateInput
    _avg?: actividadesAvgOrderByAggregateInput
    _max?: actividadesMaxOrderByAggregateInput
    _min?: actividadesMinOrderByAggregateInput
    _sum?: actividadesSumOrderByAggregateInput
  }

  export type actividadesScalarWhereWithAggregatesInput = {
    AND?: actividadesScalarWhereWithAggregatesInput | actividadesScalarWhereWithAggregatesInput[]
    OR?: actividadesScalarWhereWithAggregatesInput[]
    NOT?: actividadesScalarWhereWithAggregatesInput | actividadesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"actividades"> | number
    nombre?: StringWithAggregatesFilter<"actividades"> | string
    descripcion?: StringNullableWithAggregatesFilter<"actividades"> | string | null
    precio?: DecimalWithAggregatesFilter<"actividades"> | Decimal | DecimalJsLike | number | string
    activa?: BoolNullableWithAggregatesFilter<"actividades"> | boolean | null
  }

  export type familiasWhereInput = {
    AND?: familiasWhereInput | familiasWhereInput[]
    OR?: familiasWhereInput[]
    NOT?: familiasWhereInput | familiasWhereInput[]
    id?: IntFilter<"familias"> | number
    nombre_familia?: StringFilter<"familias"> | string
    fecha_alta?: DateTimeFilter<"familias"> | Date | string
    socios?: SociosListRelationFilter
  }

  export type familiasOrderByWithRelationInput = {
    id?: SortOrder
    nombre_familia?: SortOrder
    fecha_alta?: SortOrder
    socios?: sociosOrderByRelationAggregateInput
  }

  export type familiasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: familiasWhereInput | familiasWhereInput[]
    OR?: familiasWhereInput[]
    NOT?: familiasWhereInput | familiasWhereInput[]
    nombre_familia?: StringFilter<"familias"> | string
    fecha_alta?: DateTimeFilter<"familias"> | Date | string
    socios?: SociosListRelationFilter
  }, "id">

  export type familiasOrderByWithAggregationInput = {
    id?: SortOrder
    nombre_familia?: SortOrder
    fecha_alta?: SortOrder
    _count?: familiasCountOrderByAggregateInput
    _avg?: familiasAvgOrderByAggregateInput
    _max?: familiasMaxOrderByAggregateInput
    _min?: familiasMinOrderByAggregateInput
    _sum?: familiasSumOrderByAggregateInput
  }

  export type familiasScalarWhereWithAggregatesInput = {
    AND?: familiasScalarWhereWithAggregatesInput | familiasScalarWhereWithAggregatesInput[]
    OR?: familiasScalarWhereWithAggregatesInput[]
    NOT?: familiasScalarWhereWithAggregatesInput | familiasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"familias"> | number
    nombre_familia?: StringWithAggregatesFilter<"familias"> | string
    fecha_alta?: DateTimeWithAggregatesFilter<"familias"> | Date | string
  }

  export type inscripcionesWhereInput = {
    AND?: inscripcionesWhereInput | inscripcionesWhereInput[]
    OR?: inscripcionesWhereInput[]
    NOT?: inscripcionesWhereInput | inscripcionesWhereInput[]
    id?: IntFilter<"inscripciones"> | number
    id_socio?: IntNullableFilter<"inscripciones"> | number | null
    id_actividad?: IntNullableFilter<"inscripciones"> | number | null
    fecha_inscripcion?: DateTimeFilter<"inscripciones"> | Date | string
    pagado?: BoolNullableFilter<"inscripciones"> | boolean | null
    fecha_pago?: DateTimeNullableFilter<"inscripciones"> | Date | string | null
    actividades?: XOR<ActividadesNullableScalarRelationFilter, actividadesWhereInput> | null
    socios?: XOR<SociosNullableScalarRelationFilter, sociosWhereInput> | null
  }

  export type inscripcionesOrderByWithRelationInput = {
    id?: SortOrder
    id_socio?: SortOrderInput | SortOrder
    id_actividad?: SortOrderInput | SortOrder
    fecha_inscripcion?: SortOrder
    pagado?: SortOrderInput | SortOrder
    fecha_pago?: SortOrderInput | SortOrder
    actividades?: actividadesOrderByWithRelationInput
    socios?: sociosOrderByWithRelationInput
  }

  export type inscripcionesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: inscripcionesWhereInput | inscripcionesWhereInput[]
    OR?: inscripcionesWhereInput[]
    NOT?: inscripcionesWhereInput | inscripcionesWhereInput[]
    id_socio?: IntNullableFilter<"inscripciones"> | number | null
    id_actividad?: IntNullableFilter<"inscripciones"> | number | null
    fecha_inscripcion?: DateTimeFilter<"inscripciones"> | Date | string
    pagado?: BoolNullableFilter<"inscripciones"> | boolean | null
    fecha_pago?: DateTimeNullableFilter<"inscripciones"> | Date | string | null
    actividades?: XOR<ActividadesNullableScalarRelationFilter, actividadesWhereInput> | null
    socios?: XOR<SociosNullableScalarRelationFilter, sociosWhereInput> | null
  }, "id">

  export type inscripcionesOrderByWithAggregationInput = {
    id?: SortOrder
    id_socio?: SortOrderInput | SortOrder
    id_actividad?: SortOrderInput | SortOrder
    fecha_inscripcion?: SortOrder
    pagado?: SortOrderInput | SortOrder
    fecha_pago?: SortOrderInput | SortOrder
    _count?: inscripcionesCountOrderByAggregateInput
    _avg?: inscripcionesAvgOrderByAggregateInput
    _max?: inscripcionesMaxOrderByAggregateInput
    _min?: inscripcionesMinOrderByAggregateInput
    _sum?: inscripcionesSumOrderByAggregateInput
  }

  export type inscripcionesScalarWhereWithAggregatesInput = {
    AND?: inscripcionesScalarWhereWithAggregatesInput | inscripcionesScalarWhereWithAggregatesInput[]
    OR?: inscripcionesScalarWhereWithAggregatesInput[]
    NOT?: inscripcionesScalarWhereWithAggregatesInput | inscripcionesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"inscripciones"> | number
    id_socio?: IntNullableWithAggregatesFilter<"inscripciones"> | number | null
    id_actividad?: IntNullableWithAggregatesFilter<"inscripciones"> | number | null
    fecha_inscripcion?: DateTimeWithAggregatesFilter<"inscripciones"> | Date | string
    pagado?: BoolNullableWithAggregatesFilter<"inscripciones"> | boolean | null
    fecha_pago?: DateTimeNullableWithAggregatesFilter<"inscripciones"> | Date | string | null
  }

  export type saldosWhereInput = {
    AND?: saldosWhereInput | saldosWhereInput[]
    OR?: saldosWhereInput[]
    NOT?: saldosWhereInput | saldosWhereInput[]
    id?: IntFilter<"saldos"> | number
    id_socio?: IntNullableFilter<"saldos"> | number | null
    descripcion?: StringFilter<"saldos"> | string
    monto?: DecimalFilter<"saldos"> | Decimal | DecimalJsLike | number | string
    fecha?: DateTimeFilter<"saldos"> | Date | string
    tipo_movimiento?: StringNullableFilter<"saldos"> | string | null
    socios?: XOR<SociosNullableScalarRelationFilter, sociosWhereInput> | null
  }

  export type saldosOrderByWithRelationInput = {
    id?: SortOrder
    id_socio?: SortOrderInput | SortOrder
    descripcion?: SortOrder
    monto?: SortOrder
    fecha?: SortOrder
    tipo_movimiento?: SortOrderInput | SortOrder
    socios?: sociosOrderByWithRelationInput
  }

  export type saldosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: saldosWhereInput | saldosWhereInput[]
    OR?: saldosWhereInput[]
    NOT?: saldosWhereInput | saldosWhereInput[]
    id_socio?: IntNullableFilter<"saldos"> | number | null
    descripcion?: StringFilter<"saldos"> | string
    monto?: DecimalFilter<"saldos"> | Decimal | DecimalJsLike | number | string
    fecha?: DateTimeFilter<"saldos"> | Date | string
    tipo_movimiento?: StringNullableFilter<"saldos"> | string | null
    socios?: XOR<SociosNullableScalarRelationFilter, sociosWhereInput> | null
  }, "id">

  export type saldosOrderByWithAggregationInput = {
    id?: SortOrder
    id_socio?: SortOrderInput | SortOrder
    descripcion?: SortOrder
    monto?: SortOrder
    fecha?: SortOrder
    tipo_movimiento?: SortOrderInput | SortOrder
    _count?: saldosCountOrderByAggregateInput
    _avg?: saldosAvgOrderByAggregateInput
    _max?: saldosMaxOrderByAggregateInput
    _min?: saldosMinOrderByAggregateInput
    _sum?: saldosSumOrderByAggregateInput
  }

  export type saldosScalarWhereWithAggregatesInput = {
    AND?: saldosScalarWhereWithAggregatesInput | saldosScalarWhereWithAggregatesInput[]
    OR?: saldosScalarWhereWithAggregatesInput[]
    NOT?: saldosScalarWhereWithAggregatesInput | saldosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"saldos"> | number
    id_socio?: IntNullableWithAggregatesFilter<"saldos"> | number | null
    descripcion?: StringWithAggregatesFilter<"saldos"> | string
    monto?: DecimalWithAggregatesFilter<"saldos"> | Decimal | DecimalJsLike | number | string
    fecha?: DateTimeWithAggregatesFilter<"saldos"> | Date | string
    tipo_movimiento?: StringNullableWithAggregatesFilter<"saldos"> | string | null
  }

  export type sociosWhereInput = {
    AND?: sociosWhereInput | sociosWhereInput[]
    OR?: sociosWhereInput[]
    NOT?: sociosWhereInput | sociosWhereInput[]
    id?: IntFilter<"socios"> | number
    id_familia?: IntNullableFilter<"socios"> | number | null
    nombre?: StringFilter<"socios"> | string
    apellido?: StringFilter<"socios"> | string
    dni?: StringFilter<"socios"> | string
    fecha_nacimiento?: DateTimeNullableFilter<"socios"> | Date | string | null
    celular?: StringNullableFilter<"socios"> | string | null
    activo?: BoolNullableFilter<"socios"> | boolean | null
    inscripciones?: InscripcionesListRelationFilter
    saldos?: SaldosListRelationFilter
    familias?: XOR<FamiliasNullableScalarRelationFilter, familiasWhereInput> | null
  }

  export type sociosOrderByWithRelationInput = {
    id?: SortOrder
    id_familia?: SortOrderInput | SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    dni?: SortOrder
    fecha_nacimiento?: SortOrderInput | SortOrder
    celular?: SortOrderInput | SortOrder
    activo?: SortOrderInput | SortOrder
    inscripciones?: inscripcionesOrderByRelationAggregateInput
    saldos?: saldosOrderByRelationAggregateInput
    familias?: familiasOrderByWithRelationInput
  }

  export type sociosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    dni?: string
    AND?: sociosWhereInput | sociosWhereInput[]
    OR?: sociosWhereInput[]
    NOT?: sociosWhereInput | sociosWhereInput[]
    id_familia?: IntNullableFilter<"socios"> | number | null
    nombre?: StringFilter<"socios"> | string
    apellido?: StringFilter<"socios"> | string
    fecha_nacimiento?: DateTimeNullableFilter<"socios"> | Date | string | null
    celular?: StringNullableFilter<"socios"> | string | null
    activo?: BoolNullableFilter<"socios"> | boolean | null
    inscripciones?: InscripcionesListRelationFilter
    saldos?: SaldosListRelationFilter
    familias?: XOR<FamiliasNullableScalarRelationFilter, familiasWhereInput> | null
  }, "id" | "dni">

  export type sociosOrderByWithAggregationInput = {
    id?: SortOrder
    id_familia?: SortOrderInput | SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    dni?: SortOrder
    fecha_nacimiento?: SortOrderInput | SortOrder
    celular?: SortOrderInput | SortOrder
    activo?: SortOrderInput | SortOrder
    _count?: sociosCountOrderByAggregateInput
    _avg?: sociosAvgOrderByAggregateInput
    _max?: sociosMaxOrderByAggregateInput
    _min?: sociosMinOrderByAggregateInput
    _sum?: sociosSumOrderByAggregateInput
  }

  export type sociosScalarWhereWithAggregatesInput = {
    AND?: sociosScalarWhereWithAggregatesInput | sociosScalarWhereWithAggregatesInput[]
    OR?: sociosScalarWhereWithAggregatesInput[]
    NOT?: sociosScalarWhereWithAggregatesInput | sociosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"socios"> | number
    id_familia?: IntNullableWithAggregatesFilter<"socios"> | number | null
    nombre?: StringWithAggregatesFilter<"socios"> | string
    apellido?: StringWithAggregatesFilter<"socios"> | string
    dni?: StringWithAggregatesFilter<"socios"> | string
    fecha_nacimiento?: DateTimeNullableWithAggregatesFilter<"socios"> | Date | string | null
    celular?: StringNullableWithAggregatesFilter<"socios"> | string | null
    activo?: BoolNullableWithAggregatesFilter<"socios"> | boolean | null
  }

  export type actividadesCreateInput = {
    nombre: string
    descripcion?: string | null
    precio: Decimal | DecimalJsLike | number | string
    activa?: boolean | null
    inscripciones?: inscripcionesCreateNestedManyWithoutActividadesInput
  }

  export type actividadesUncheckedCreateInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    precio: Decimal | DecimalJsLike | number | string
    activa?: boolean | null
    inscripciones?: inscripcionesUncheckedCreateNestedManyWithoutActividadesInput
  }

  export type actividadesUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    activa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    inscripciones?: inscripcionesUpdateManyWithoutActividadesNestedInput
  }

  export type actividadesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    activa?: NullableBoolFieldUpdateOperationsInput | boolean | null
    inscripciones?: inscripcionesUncheckedUpdateManyWithoutActividadesNestedInput
  }

  export type actividadesCreateManyInput = {
    nombre: string
    descripcion?: string | null
    precio: Decimal | DecimalJsLike | number | string
    activa?: boolean | null
  }

  export type actividadesUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    activa?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type actividadesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    activa?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type familiasCreateInput = {
    nombre_familia: string
    fecha_alta?: Date | string
    socios?: sociosCreateNestedManyWithoutFamiliasInput
  }

  export type familiasUncheckedCreateInput = {
    id?: number
    nombre_familia: string
    fecha_alta?: Date | string
    socios?: sociosUncheckedCreateNestedManyWithoutFamiliasInput
  }

  export type familiasUpdateInput = {
    nombre_familia?: StringFieldUpdateOperationsInput | string
    fecha_alta?: DateTimeFieldUpdateOperationsInput | Date | string
    socios?: sociosUpdateManyWithoutFamiliasNestedInput
  }

  export type familiasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre_familia?: StringFieldUpdateOperationsInput | string
    fecha_alta?: DateTimeFieldUpdateOperationsInput | Date | string
    socios?: sociosUncheckedUpdateManyWithoutFamiliasNestedInput
  }

  export type familiasCreateManyInput = {
    nombre_familia: string
    fecha_alta?: Date | string
  }

  export type familiasUpdateManyMutationInput = {
    nombre_familia?: StringFieldUpdateOperationsInput | string
    fecha_alta?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type familiasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre_familia?: StringFieldUpdateOperationsInput | string
    fecha_alta?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type inscripcionesCreateInput = {
    fecha_inscripcion?: Date | string
    pagado?: boolean | null
    fecha_pago?: Date | string | null
    actividades?: actividadesCreateNestedOneWithoutInscripcionesInput
    socios?: sociosCreateNestedOneWithoutInscripcionesInput
  }

  export type inscripcionesUncheckedCreateInput = {
    id?: number
    id_socio?: number | null
    id_actividad?: number | null
    fecha_inscripcion?: Date | string
    pagado?: boolean | null
    fecha_pago?: Date | string | null
  }

  export type inscripcionesUpdateInput = {
    fecha_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    pagado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    fecha_pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actividades?: actividadesUpdateOneWithoutInscripcionesNestedInput
    socios?: sociosUpdateOneWithoutInscripcionesNestedInput
  }

  export type inscripcionesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_socio?: NullableIntFieldUpdateOperationsInput | number | null
    id_actividad?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    pagado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    fecha_pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type inscripcionesCreateManyInput = {
    id_socio?: number | null
    id_actividad?: number | null
    fecha_inscripcion?: Date | string
    pagado?: boolean | null
    fecha_pago?: Date | string | null
  }

  export type inscripcionesUpdateManyMutationInput = {
    fecha_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    pagado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    fecha_pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type inscripcionesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_socio?: NullableIntFieldUpdateOperationsInput | number | null
    id_actividad?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    pagado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    fecha_pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type saldosCreateInput = {
    descripcion: string
    monto: Decimal | DecimalJsLike | number | string
    fecha?: Date | string
    tipo_movimiento?: string | null
    socios?: sociosCreateNestedOneWithoutSaldosInput
  }

  export type saldosUncheckedCreateInput = {
    id?: number
    id_socio?: number | null
    descripcion: string
    monto: Decimal | DecimalJsLike | number | string
    fecha?: Date | string
    tipo_movimiento?: string | null
  }

  export type saldosUpdateInput = {
    descripcion?: StringFieldUpdateOperationsInput | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo_movimiento?: NullableStringFieldUpdateOperationsInput | string | null
    socios?: sociosUpdateOneWithoutSaldosNestedInput
  }

  export type saldosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_socio?: NullableIntFieldUpdateOperationsInput | number | null
    descripcion?: StringFieldUpdateOperationsInput | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo_movimiento?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type saldosCreateManyInput = {
    id_socio?: number | null
    descripcion: string
    monto: Decimal | DecimalJsLike | number | string
    fecha?: Date | string
    tipo_movimiento?: string | null
  }

  export type saldosUpdateManyMutationInput = {
    descripcion?: StringFieldUpdateOperationsInput | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo_movimiento?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type saldosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_socio?: NullableIntFieldUpdateOperationsInput | number | null
    descripcion?: StringFieldUpdateOperationsInput | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo_movimiento?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sociosCreateInput = {
    nombre: string
    apellido: string
    dni: string
    fecha_nacimiento?: Date | string | null
    celular?: string | null
    activo?: boolean | null
    inscripciones?: inscripcionesCreateNestedManyWithoutSociosInput
    saldos?: saldosCreateNestedManyWithoutSociosInput
    familias?: familiasCreateNestedOneWithoutSociosInput
  }

  export type sociosUncheckedCreateInput = {
    id?: number
    id_familia?: number | null
    nombre: string
    apellido: string
    dni: string
    fecha_nacimiento?: Date | string | null
    celular?: string | null
    activo?: boolean | null
    inscripciones?: inscripcionesUncheckedCreateNestedManyWithoutSociosInput
    saldos?: saldosUncheckedCreateNestedManyWithoutSociosInput
  }

  export type sociosUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    inscripciones?: inscripcionesUpdateManyWithoutSociosNestedInput
    saldos?: saldosUpdateManyWithoutSociosNestedInput
    familias?: familiasUpdateOneWithoutSociosNestedInput
  }

  export type sociosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_familia?: NullableIntFieldUpdateOperationsInput | number | null
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    inscripciones?: inscripcionesUncheckedUpdateManyWithoutSociosNestedInput
    saldos?: saldosUncheckedUpdateManyWithoutSociosNestedInput
  }

  export type sociosCreateManyInput = {
    id_familia?: number | null
    nombre: string
    apellido: string
    dni: string
    fecha_nacimiento?: Date | string | null
    celular?: string | null
    activo?: boolean | null
  }

  export type sociosUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type sociosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_familia?: NullableIntFieldUpdateOperationsInput | number | null
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type InscripcionesListRelationFilter = {
    every?: inscripcionesWhereInput
    some?: inscripcionesWhereInput
    none?: inscripcionesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type inscripcionesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type actividadesCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    activa?: SortOrder
  }

  export type actividadesAvgOrderByAggregateInput = {
    id?: SortOrder
    precio?: SortOrder
  }

  export type actividadesMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    activa?: SortOrder
  }

  export type actividadesMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    precio?: SortOrder
    activa?: SortOrder
  }

  export type actividadesSumOrderByAggregateInput = {
    id?: SortOrder
    precio?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SociosListRelationFilter = {
    every?: sociosWhereInput
    some?: sociosWhereInput
    none?: sociosWhereInput
  }

  export type sociosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type familiasCountOrderByAggregateInput = {
    id?: SortOrder
    nombre_familia?: SortOrder
    fecha_alta?: SortOrder
  }

  export type familiasAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type familiasMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre_familia?: SortOrder
    fecha_alta?: SortOrder
  }

  export type familiasMinOrderByAggregateInput = {
    id?: SortOrder
    nombre_familia?: SortOrder
    fecha_alta?: SortOrder
  }

  export type familiasSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ActividadesNullableScalarRelationFilter = {
    is?: actividadesWhereInput | null
    isNot?: actividadesWhereInput | null
  }

  export type SociosNullableScalarRelationFilter = {
    is?: sociosWhereInput | null
    isNot?: sociosWhereInput | null
  }

  export type inscripcionesCountOrderByAggregateInput = {
    id?: SortOrder
    id_socio?: SortOrder
    id_actividad?: SortOrder
    fecha_inscripcion?: SortOrder
    pagado?: SortOrder
    fecha_pago?: SortOrder
  }

  export type inscripcionesAvgOrderByAggregateInput = {
    id?: SortOrder
    id_socio?: SortOrder
    id_actividad?: SortOrder
  }

  export type inscripcionesMaxOrderByAggregateInput = {
    id?: SortOrder
    id_socio?: SortOrder
    id_actividad?: SortOrder
    fecha_inscripcion?: SortOrder
    pagado?: SortOrder
    fecha_pago?: SortOrder
  }

  export type inscripcionesMinOrderByAggregateInput = {
    id?: SortOrder
    id_socio?: SortOrder
    id_actividad?: SortOrder
    fecha_inscripcion?: SortOrder
    pagado?: SortOrder
    fecha_pago?: SortOrder
  }

  export type inscripcionesSumOrderByAggregateInput = {
    id?: SortOrder
    id_socio?: SortOrder
    id_actividad?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type saldosCountOrderByAggregateInput = {
    id?: SortOrder
    id_socio?: SortOrder
    descripcion?: SortOrder
    monto?: SortOrder
    fecha?: SortOrder
    tipo_movimiento?: SortOrder
  }

  export type saldosAvgOrderByAggregateInput = {
    id?: SortOrder
    id_socio?: SortOrder
    monto?: SortOrder
  }

  export type saldosMaxOrderByAggregateInput = {
    id?: SortOrder
    id_socio?: SortOrder
    descripcion?: SortOrder
    monto?: SortOrder
    fecha?: SortOrder
    tipo_movimiento?: SortOrder
  }

  export type saldosMinOrderByAggregateInput = {
    id?: SortOrder
    id_socio?: SortOrder
    descripcion?: SortOrder
    monto?: SortOrder
    fecha?: SortOrder
    tipo_movimiento?: SortOrder
  }

  export type saldosSumOrderByAggregateInput = {
    id?: SortOrder
    id_socio?: SortOrder
    monto?: SortOrder
  }

  export type SaldosListRelationFilter = {
    every?: saldosWhereInput
    some?: saldosWhereInput
    none?: saldosWhereInput
  }

  export type FamiliasNullableScalarRelationFilter = {
    is?: familiasWhereInput | null
    isNot?: familiasWhereInput | null
  }

  export type saldosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type sociosCountOrderByAggregateInput = {
    id?: SortOrder
    id_familia?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    dni?: SortOrder
    fecha_nacimiento?: SortOrder
    celular?: SortOrder
    activo?: SortOrder
  }

  export type sociosAvgOrderByAggregateInput = {
    id?: SortOrder
    id_familia?: SortOrder
  }

  export type sociosMaxOrderByAggregateInput = {
    id?: SortOrder
    id_familia?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    dni?: SortOrder
    fecha_nacimiento?: SortOrder
    celular?: SortOrder
    activo?: SortOrder
  }

  export type sociosMinOrderByAggregateInput = {
    id?: SortOrder
    id_familia?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    dni?: SortOrder
    fecha_nacimiento?: SortOrder
    celular?: SortOrder
    activo?: SortOrder
  }

  export type sociosSumOrderByAggregateInput = {
    id?: SortOrder
    id_familia?: SortOrder
  }

  export type inscripcionesCreateNestedManyWithoutActividadesInput = {
    create?: XOR<inscripcionesCreateWithoutActividadesInput, inscripcionesUncheckedCreateWithoutActividadesInput> | inscripcionesCreateWithoutActividadesInput[] | inscripcionesUncheckedCreateWithoutActividadesInput[]
    connectOrCreate?: inscripcionesCreateOrConnectWithoutActividadesInput | inscripcionesCreateOrConnectWithoutActividadesInput[]
    createMany?: inscripcionesCreateManyActividadesInputEnvelope
    connect?: inscripcionesWhereUniqueInput | inscripcionesWhereUniqueInput[]
  }

  export type inscripcionesUncheckedCreateNestedManyWithoutActividadesInput = {
    create?: XOR<inscripcionesCreateWithoutActividadesInput, inscripcionesUncheckedCreateWithoutActividadesInput> | inscripcionesCreateWithoutActividadesInput[] | inscripcionesUncheckedCreateWithoutActividadesInput[]
    connectOrCreate?: inscripcionesCreateOrConnectWithoutActividadesInput | inscripcionesCreateOrConnectWithoutActividadesInput[]
    createMany?: inscripcionesCreateManyActividadesInputEnvelope
    connect?: inscripcionesWhereUniqueInput | inscripcionesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type inscripcionesUpdateManyWithoutActividadesNestedInput = {
    create?: XOR<inscripcionesCreateWithoutActividadesInput, inscripcionesUncheckedCreateWithoutActividadesInput> | inscripcionesCreateWithoutActividadesInput[] | inscripcionesUncheckedCreateWithoutActividadesInput[]
    connectOrCreate?: inscripcionesCreateOrConnectWithoutActividadesInput | inscripcionesCreateOrConnectWithoutActividadesInput[]
    upsert?: inscripcionesUpsertWithWhereUniqueWithoutActividadesInput | inscripcionesUpsertWithWhereUniqueWithoutActividadesInput[]
    createMany?: inscripcionesCreateManyActividadesInputEnvelope
    set?: inscripcionesWhereUniqueInput | inscripcionesWhereUniqueInput[]
    disconnect?: inscripcionesWhereUniqueInput | inscripcionesWhereUniqueInput[]
    delete?: inscripcionesWhereUniqueInput | inscripcionesWhereUniqueInput[]
    connect?: inscripcionesWhereUniqueInput | inscripcionesWhereUniqueInput[]
    update?: inscripcionesUpdateWithWhereUniqueWithoutActividadesInput | inscripcionesUpdateWithWhereUniqueWithoutActividadesInput[]
    updateMany?: inscripcionesUpdateManyWithWhereWithoutActividadesInput | inscripcionesUpdateManyWithWhereWithoutActividadesInput[]
    deleteMany?: inscripcionesScalarWhereInput | inscripcionesScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type inscripcionesUncheckedUpdateManyWithoutActividadesNestedInput = {
    create?: XOR<inscripcionesCreateWithoutActividadesInput, inscripcionesUncheckedCreateWithoutActividadesInput> | inscripcionesCreateWithoutActividadesInput[] | inscripcionesUncheckedCreateWithoutActividadesInput[]
    connectOrCreate?: inscripcionesCreateOrConnectWithoutActividadesInput | inscripcionesCreateOrConnectWithoutActividadesInput[]
    upsert?: inscripcionesUpsertWithWhereUniqueWithoutActividadesInput | inscripcionesUpsertWithWhereUniqueWithoutActividadesInput[]
    createMany?: inscripcionesCreateManyActividadesInputEnvelope
    set?: inscripcionesWhereUniqueInput | inscripcionesWhereUniqueInput[]
    disconnect?: inscripcionesWhereUniqueInput | inscripcionesWhereUniqueInput[]
    delete?: inscripcionesWhereUniqueInput | inscripcionesWhereUniqueInput[]
    connect?: inscripcionesWhereUniqueInput | inscripcionesWhereUniqueInput[]
    update?: inscripcionesUpdateWithWhereUniqueWithoutActividadesInput | inscripcionesUpdateWithWhereUniqueWithoutActividadesInput[]
    updateMany?: inscripcionesUpdateManyWithWhereWithoutActividadesInput | inscripcionesUpdateManyWithWhereWithoutActividadesInput[]
    deleteMany?: inscripcionesScalarWhereInput | inscripcionesScalarWhereInput[]
  }

  export type sociosCreateNestedManyWithoutFamiliasInput = {
    create?: XOR<sociosCreateWithoutFamiliasInput, sociosUncheckedCreateWithoutFamiliasInput> | sociosCreateWithoutFamiliasInput[] | sociosUncheckedCreateWithoutFamiliasInput[]
    connectOrCreate?: sociosCreateOrConnectWithoutFamiliasInput | sociosCreateOrConnectWithoutFamiliasInput[]
    createMany?: sociosCreateManyFamiliasInputEnvelope
    connect?: sociosWhereUniqueInput | sociosWhereUniqueInput[]
  }

  export type sociosUncheckedCreateNestedManyWithoutFamiliasInput = {
    create?: XOR<sociosCreateWithoutFamiliasInput, sociosUncheckedCreateWithoutFamiliasInput> | sociosCreateWithoutFamiliasInput[] | sociosUncheckedCreateWithoutFamiliasInput[]
    connectOrCreate?: sociosCreateOrConnectWithoutFamiliasInput | sociosCreateOrConnectWithoutFamiliasInput[]
    createMany?: sociosCreateManyFamiliasInputEnvelope
    connect?: sociosWhereUniqueInput | sociosWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type sociosUpdateManyWithoutFamiliasNestedInput = {
    create?: XOR<sociosCreateWithoutFamiliasInput, sociosUncheckedCreateWithoutFamiliasInput> | sociosCreateWithoutFamiliasInput[] | sociosUncheckedCreateWithoutFamiliasInput[]
    connectOrCreate?: sociosCreateOrConnectWithoutFamiliasInput | sociosCreateOrConnectWithoutFamiliasInput[]
    upsert?: sociosUpsertWithWhereUniqueWithoutFamiliasInput | sociosUpsertWithWhereUniqueWithoutFamiliasInput[]
    createMany?: sociosCreateManyFamiliasInputEnvelope
    set?: sociosWhereUniqueInput | sociosWhereUniqueInput[]
    disconnect?: sociosWhereUniqueInput | sociosWhereUniqueInput[]
    delete?: sociosWhereUniqueInput | sociosWhereUniqueInput[]
    connect?: sociosWhereUniqueInput | sociosWhereUniqueInput[]
    update?: sociosUpdateWithWhereUniqueWithoutFamiliasInput | sociosUpdateWithWhereUniqueWithoutFamiliasInput[]
    updateMany?: sociosUpdateManyWithWhereWithoutFamiliasInput | sociosUpdateManyWithWhereWithoutFamiliasInput[]
    deleteMany?: sociosScalarWhereInput | sociosScalarWhereInput[]
  }

  export type sociosUncheckedUpdateManyWithoutFamiliasNestedInput = {
    create?: XOR<sociosCreateWithoutFamiliasInput, sociosUncheckedCreateWithoutFamiliasInput> | sociosCreateWithoutFamiliasInput[] | sociosUncheckedCreateWithoutFamiliasInput[]
    connectOrCreate?: sociosCreateOrConnectWithoutFamiliasInput | sociosCreateOrConnectWithoutFamiliasInput[]
    upsert?: sociosUpsertWithWhereUniqueWithoutFamiliasInput | sociosUpsertWithWhereUniqueWithoutFamiliasInput[]
    createMany?: sociosCreateManyFamiliasInputEnvelope
    set?: sociosWhereUniqueInput | sociosWhereUniqueInput[]
    disconnect?: sociosWhereUniqueInput | sociosWhereUniqueInput[]
    delete?: sociosWhereUniqueInput | sociosWhereUniqueInput[]
    connect?: sociosWhereUniqueInput | sociosWhereUniqueInput[]
    update?: sociosUpdateWithWhereUniqueWithoutFamiliasInput | sociosUpdateWithWhereUniqueWithoutFamiliasInput[]
    updateMany?: sociosUpdateManyWithWhereWithoutFamiliasInput | sociosUpdateManyWithWhereWithoutFamiliasInput[]
    deleteMany?: sociosScalarWhereInput | sociosScalarWhereInput[]
  }

  export type actividadesCreateNestedOneWithoutInscripcionesInput = {
    create?: XOR<actividadesCreateWithoutInscripcionesInput, actividadesUncheckedCreateWithoutInscripcionesInput>
    connectOrCreate?: actividadesCreateOrConnectWithoutInscripcionesInput
    connect?: actividadesWhereUniqueInput
  }

  export type sociosCreateNestedOneWithoutInscripcionesInput = {
    create?: XOR<sociosCreateWithoutInscripcionesInput, sociosUncheckedCreateWithoutInscripcionesInput>
    connectOrCreate?: sociosCreateOrConnectWithoutInscripcionesInput
    connect?: sociosWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type actividadesUpdateOneWithoutInscripcionesNestedInput = {
    create?: XOR<actividadesCreateWithoutInscripcionesInput, actividadesUncheckedCreateWithoutInscripcionesInput>
    connectOrCreate?: actividadesCreateOrConnectWithoutInscripcionesInput
    upsert?: actividadesUpsertWithoutInscripcionesInput
    disconnect?: actividadesWhereInput | boolean
    delete?: actividadesWhereInput | boolean
    connect?: actividadesWhereUniqueInput
    update?: XOR<XOR<actividadesUpdateToOneWithWhereWithoutInscripcionesInput, actividadesUpdateWithoutInscripcionesInput>, actividadesUncheckedUpdateWithoutInscripcionesInput>
  }

  export type sociosUpdateOneWithoutInscripcionesNestedInput = {
    create?: XOR<sociosCreateWithoutInscripcionesInput, sociosUncheckedCreateWithoutInscripcionesInput>
    connectOrCreate?: sociosCreateOrConnectWithoutInscripcionesInput
    upsert?: sociosUpsertWithoutInscripcionesInput
    disconnect?: sociosWhereInput | boolean
    delete?: sociosWhereInput | boolean
    connect?: sociosWhereUniqueInput
    update?: XOR<XOR<sociosUpdateToOneWithWhereWithoutInscripcionesInput, sociosUpdateWithoutInscripcionesInput>, sociosUncheckedUpdateWithoutInscripcionesInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type sociosCreateNestedOneWithoutSaldosInput = {
    create?: XOR<sociosCreateWithoutSaldosInput, sociosUncheckedCreateWithoutSaldosInput>
    connectOrCreate?: sociosCreateOrConnectWithoutSaldosInput
    connect?: sociosWhereUniqueInput
  }

  export type sociosUpdateOneWithoutSaldosNestedInput = {
    create?: XOR<sociosCreateWithoutSaldosInput, sociosUncheckedCreateWithoutSaldosInput>
    connectOrCreate?: sociosCreateOrConnectWithoutSaldosInput
    upsert?: sociosUpsertWithoutSaldosInput
    disconnect?: sociosWhereInput | boolean
    delete?: sociosWhereInput | boolean
    connect?: sociosWhereUniqueInput
    update?: XOR<XOR<sociosUpdateToOneWithWhereWithoutSaldosInput, sociosUpdateWithoutSaldosInput>, sociosUncheckedUpdateWithoutSaldosInput>
  }

  export type inscripcionesCreateNestedManyWithoutSociosInput = {
    create?: XOR<inscripcionesCreateWithoutSociosInput, inscripcionesUncheckedCreateWithoutSociosInput> | inscripcionesCreateWithoutSociosInput[] | inscripcionesUncheckedCreateWithoutSociosInput[]
    connectOrCreate?: inscripcionesCreateOrConnectWithoutSociosInput | inscripcionesCreateOrConnectWithoutSociosInput[]
    createMany?: inscripcionesCreateManySociosInputEnvelope
    connect?: inscripcionesWhereUniqueInput | inscripcionesWhereUniqueInput[]
  }

  export type saldosCreateNestedManyWithoutSociosInput = {
    create?: XOR<saldosCreateWithoutSociosInput, saldosUncheckedCreateWithoutSociosInput> | saldosCreateWithoutSociosInput[] | saldosUncheckedCreateWithoutSociosInput[]
    connectOrCreate?: saldosCreateOrConnectWithoutSociosInput | saldosCreateOrConnectWithoutSociosInput[]
    createMany?: saldosCreateManySociosInputEnvelope
    connect?: saldosWhereUniqueInput | saldosWhereUniqueInput[]
  }

  export type familiasCreateNestedOneWithoutSociosInput = {
    create?: XOR<familiasCreateWithoutSociosInput, familiasUncheckedCreateWithoutSociosInput>
    connectOrCreate?: familiasCreateOrConnectWithoutSociosInput
    connect?: familiasWhereUniqueInput
  }

  export type inscripcionesUncheckedCreateNestedManyWithoutSociosInput = {
    create?: XOR<inscripcionesCreateWithoutSociosInput, inscripcionesUncheckedCreateWithoutSociosInput> | inscripcionesCreateWithoutSociosInput[] | inscripcionesUncheckedCreateWithoutSociosInput[]
    connectOrCreate?: inscripcionesCreateOrConnectWithoutSociosInput | inscripcionesCreateOrConnectWithoutSociosInput[]
    createMany?: inscripcionesCreateManySociosInputEnvelope
    connect?: inscripcionesWhereUniqueInput | inscripcionesWhereUniqueInput[]
  }

  export type saldosUncheckedCreateNestedManyWithoutSociosInput = {
    create?: XOR<saldosCreateWithoutSociosInput, saldosUncheckedCreateWithoutSociosInput> | saldosCreateWithoutSociosInput[] | saldosUncheckedCreateWithoutSociosInput[]
    connectOrCreate?: saldosCreateOrConnectWithoutSociosInput | saldosCreateOrConnectWithoutSociosInput[]
    createMany?: saldosCreateManySociosInputEnvelope
    connect?: saldosWhereUniqueInput | saldosWhereUniqueInput[]
  }

  export type inscripcionesUpdateManyWithoutSociosNestedInput = {
    create?: XOR<inscripcionesCreateWithoutSociosInput, inscripcionesUncheckedCreateWithoutSociosInput> | inscripcionesCreateWithoutSociosInput[] | inscripcionesUncheckedCreateWithoutSociosInput[]
    connectOrCreate?: inscripcionesCreateOrConnectWithoutSociosInput | inscripcionesCreateOrConnectWithoutSociosInput[]
    upsert?: inscripcionesUpsertWithWhereUniqueWithoutSociosInput | inscripcionesUpsertWithWhereUniqueWithoutSociosInput[]
    createMany?: inscripcionesCreateManySociosInputEnvelope
    set?: inscripcionesWhereUniqueInput | inscripcionesWhereUniqueInput[]
    disconnect?: inscripcionesWhereUniqueInput | inscripcionesWhereUniqueInput[]
    delete?: inscripcionesWhereUniqueInput | inscripcionesWhereUniqueInput[]
    connect?: inscripcionesWhereUniqueInput | inscripcionesWhereUniqueInput[]
    update?: inscripcionesUpdateWithWhereUniqueWithoutSociosInput | inscripcionesUpdateWithWhereUniqueWithoutSociosInput[]
    updateMany?: inscripcionesUpdateManyWithWhereWithoutSociosInput | inscripcionesUpdateManyWithWhereWithoutSociosInput[]
    deleteMany?: inscripcionesScalarWhereInput | inscripcionesScalarWhereInput[]
  }

  export type saldosUpdateManyWithoutSociosNestedInput = {
    create?: XOR<saldosCreateWithoutSociosInput, saldosUncheckedCreateWithoutSociosInput> | saldosCreateWithoutSociosInput[] | saldosUncheckedCreateWithoutSociosInput[]
    connectOrCreate?: saldosCreateOrConnectWithoutSociosInput | saldosCreateOrConnectWithoutSociosInput[]
    upsert?: saldosUpsertWithWhereUniqueWithoutSociosInput | saldosUpsertWithWhereUniqueWithoutSociosInput[]
    createMany?: saldosCreateManySociosInputEnvelope
    set?: saldosWhereUniqueInput | saldosWhereUniqueInput[]
    disconnect?: saldosWhereUniqueInput | saldosWhereUniqueInput[]
    delete?: saldosWhereUniqueInput | saldosWhereUniqueInput[]
    connect?: saldosWhereUniqueInput | saldosWhereUniqueInput[]
    update?: saldosUpdateWithWhereUniqueWithoutSociosInput | saldosUpdateWithWhereUniqueWithoutSociosInput[]
    updateMany?: saldosUpdateManyWithWhereWithoutSociosInput | saldosUpdateManyWithWhereWithoutSociosInput[]
    deleteMany?: saldosScalarWhereInput | saldosScalarWhereInput[]
  }

  export type familiasUpdateOneWithoutSociosNestedInput = {
    create?: XOR<familiasCreateWithoutSociosInput, familiasUncheckedCreateWithoutSociosInput>
    connectOrCreate?: familiasCreateOrConnectWithoutSociosInput
    upsert?: familiasUpsertWithoutSociosInput
    disconnect?: familiasWhereInput | boolean
    delete?: familiasWhereInput | boolean
    connect?: familiasWhereUniqueInput
    update?: XOR<XOR<familiasUpdateToOneWithWhereWithoutSociosInput, familiasUpdateWithoutSociosInput>, familiasUncheckedUpdateWithoutSociosInput>
  }

  export type inscripcionesUncheckedUpdateManyWithoutSociosNestedInput = {
    create?: XOR<inscripcionesCreateWithoutSociosInput, inscripcionesUncheckedCreateWithoutSociosInput> | inscripcionesCreateWithoutSociosInput[] | inscripcionesUncheckedCreateWithoutSociosInput[]
    connectOrCreate?: inscripcionesCreateOrConnectWithoutSociosInput | inscripcionesCreateOrConnectWithoutSociosInput[]
    upsert?: inscripcionesUpsertWithWhereUniqueWithoutSociosInput | inscripcionesUpsertWithWhereUniqueWithoutSociosInput[]
    createMany?: inscripcionesCreateManySociosInputEnvelope
    set?: inscripcionesWhereUniqueInput | inscripcionesWhereUniqueInput[]
    disconnect?: inscripcionesWhereUniqueInput | inscripcionesWhereUniqueInput[]
    delete?: inscripcionesWhereUniqueInput | inscripcionesWhereUniqueInput[]
    connect?: inscripcionesWhereUniqueInput | inscripcionesWhereUniqueInput[]
    update?: inscripcionesUpdateWithWhereUniqueWithoutSociosInput | inscripcionesUpdateWithWhereUniqueWithoutSociosInput[]
    updateMany?: inscripcionesUpdateManyWithWhereWithoutSociosInput | inscripcionesUpdateManyWithWhereWithoutSociosInput[]
    deleteMany?: inscripcionesScalarWhereInput | inscripcionesScalarWhereInput[]
  }

  export type saldosUncheckedUpdateManyWithoutSociosNestedInput = {
    create?: XOR<saldosCreateWithoutSociosInput, saldosUncheckedCreateWithoutSociosInput> | saldosCreateWithoutSociosInput[] | saldosUncheckedCreateWithoutSociosInput[]
    connectOrCreate?: saldosCreateOrConnectWithoutSociosInput | saldosCreateOrConnectWithoutSociosInput[]
    upsert?: saldosUpsertWithWhereUniqueWithoutSociosInput | saldosUpsertWithWhereUniqueWithoutSociosInput[]
    createMany?: saldosCreateManySociosInputEnvelope
    set?: saldosWhereUniqueInput | saldosWhereUniqueInput[]
    disconnect?: saldosWhereUniqueInput | saldosWhereUniqueInput[]
    delete?: saldosWhereUniqueInput | saldosWhereUniqueInput[]
    connect?: saldosWhereUniqueInput | saldosWhereUniqueInput[]
    update?: saldosUpdateWithWhereUniqueWithoutSociosInput | saldosUpdateWithWhereUniqueWithoutSociosInput[]
    updateMany?: saldosUpdateManyWithWhereWithoutSociosInput | saldosUpdateManyWithWhereWithoutSociosInput[]
    deleteMany?: saldosScalarWhereInput | saldosScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type inscripcionesCreateWithoutActividadesInput = {
    fecha_inscripcion?: Date | string
    pagado?: boolean | null
    fecha_pago?: Date | string | null
    socios?: sociosCreateNestedOneWithoutInscripcionesInput
  }

  export type inscripcionesUncheckedCreateWithoutActividadesInput = {
    id?: number
    id_socio?: number | null
    fecha_inscripcion?: Date | string
    pagado?: boolean | null
    fecha_pago?: Date | string | null
  }

  export type inscripcionesCreateOrConnectWithoutActividadesInput = {
    where: inscripcionesWhereUniqueInput
    create: XOR<inscripcionesCreateWithoutActividadesInput, inscripcionesUncheckedCreateWithoutActividadesInput>
  }

  export type inscripcionesCreateManyActividadesInputEnvelope = {
    data: inscripcionesCreateManyActividadesInput | inscripcionesCreateManyActividadesInput[]
  }

  export type inscripcionesUpsertWithWhereUniqueWithoutActividadesInput = {
    where: inscripcionesWhereUniqueInput
    update: XOR<inscripcionesUpdateWithoutActividadesInput, inscripcionesUncheckedUpdateWithoutActividadesInput>
    create: XOR<inscripcionesCreateWithoutActividadesInput, inscripcionesUncheckedCreateWithoutActividadesInput>
  }

  export type inscripcionesUpdateWithWhereUniqueWithoutActividadesInput = {
    where: inscripcionesWhereUniqueInput
    data: XOR<inscripcionesUpdateWithoutActividadesInput, inscripcionesUncheckedUpdateWithoutActividadesInput>
  }

  export type inscripcionesUpdateManyWithWhereWithoutActividadesInput = {
    where: inscripcionesScalarWhereInput
    data: XOR<inscripcionesUpdateManyMutationInput, inscripcionesUncheckedUpdateManyWithoutActividadesInput>
  }

  export type inscripcionesScalarWhereInput = {
    AND?: inscripcionesScalarWhereInput | inscripcionesScalarWhereInput[]
    OR?: inscripcionesScalarWhereInput[]
    NOT?: inscripcionesScalarWhereInput | inscripcionesScalarWhereInput[]
    id?: IntFilter<"inscripciones"> | number
    id_socio?: IntNullableFilter<"inscripciones"> | number | null
    id_actividad?: IntNullableFilter<"inscripciones"> | number | null
    fecha_inscripcion?: DateTimeFilter<"inscripciones"> | Date | string
    pagado?: BoolNullableFilter<"inscripciones"> | boolean | null
    fecha_pago?: DateTimeNullableFilter<"inscripciones"> | Date | string | null
  }

  export type sociosCreateWithoutFamiliasInput = {
    nombre: string
    apellido: string
    dni: string
    fecha_nacimiento?: Date | string | null
    celular?: string | null
    activo?: boolean | null
    inscripciones?: inscripcionesCreateNestedManyWithoutSociosInput
    saldos?: saldosCreateNestedManyWithoutSociosInput
  }

  export type sociosUncheckedCreateWithoutFamiliasInput = {
    id?: number
    nombre: string
    apellido: string
    dni: string
    fecha_nacimiento?: Date | string | null
    celular?: string | null
    activo?: boolean | null
    inscripciones?: inscripcionesUncheckedCreateNestedManyWithoutSociosInput
    saldos?: saldosUncheckedCreateNestedManyWithoutSociosInput
  }

  export type sociosCreateOrConnectWithoutFamiliasInput = {
    where: sociosWhereUniqueInput
    create: XOR<sociosCreateWithoutFamiliasInput, sociosUncheckedCreateWithoutFamiliasInput>
  }

  export type sociosCreateManyFamiliasInputEnvelope = {
    data: sociosCreateManyFamiliasInput | sociosCreateManyFamiliasInput[]
  }

  export type sociosUpsertWithWhereUniqueWithoutFamiliasInput = {
    where: sociosWhereUniqueInput
    update: XOR<sociosUpdateWithoutFamiliasInput, sociosUncheckedUpdateWithoutFamiliasInput>
    create: XOR<sociosCreateWithoutFamiliasInput, sociosUncheckedCreateWithoutFamiliasInput>
  }

  export type sociosUpdateWithWhereUniqueWithoutFamiliasInput = {
    where: sociosWhereUniqueInput
    data: XOR<sociosUpdateWithoutFamiliasInput, sociosUncheckedUpdateWithoutFamiliasInput>
  }

  export type sociosUpdateManyWithWhereWithoutFamiliasInput = {
    where: sociosScalarWhereInput
    data: XOR<sociosUpdateManyMutationInput, sociosUncheckedUpdateManyWithoutFamiliasInput>
  }

  export type sociosScalarWhereInput = {
    AND?: sociosScalarWhereInput | sociosScalarWhereInput[]
    OR?: sociosScalarWhereInput[]
    NOT?: sociosScalarWhereInput | sociosScalarWhereInput[]
    id?: IntFilter<"socios"> | number
    id_familia?: IntNullableFilter<"socios"> | number | null
    nombre?: StringFilter<"socios"> | string
    apellido?: StringFilter<"socios"> | string
    dni?: StringFilter<"socios"> | string
    fecha_nacimiento?: DateTimeNullableFilter<"socios"> | Date | string | null
    celular?: StringNullableFilter<"socios"> | string | null
    activo?: BoolNullableFilter<"socios"> | boolean | null
  }

  export type actividadesCreateWithoutInscripcionesInput = {
    nombre: string
    descripcion?: string | null
    precio: Decimal | DecimalJsLike | number | string
    activa?: boolean | null
  }

  export type actividadesUncheckedCreateWithoutInscripcionesInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    precio: Decimal | DecimalJsLike | number | string
    activa?: boolean | null
  }

  export type actividadesCreateOrConnectWithoutInscripcionesInput = {
    where: actividadesWhereUniqueInput
    create: XOR<actividadesCreateWithoutInscripcionesInput, actividadesUncheckedCreateWithoutInscripcionesInput>
  }

  export type sociosCreateWithoutInscripcionesInput = {
    nombre: string
    apellido: string
    dni: string
    fecha_nacimiento?: Date | string | null
    celular?: string | null
    activo?: boolean | null
    saldos?: saldosCreateNestedManyWithoutSociosInput
    familias?: familiasCreateNestedOneWithoutSociosInput
  }

  export type sociosUncheckedCreateWithoutInscripcionesInput = {
    id?: number
    id_familia?: number | null
    nombre: string
    apellido: string
    dni: string
    fecha_nacimiento?: Date | string | null
    celular?: string | null
    activo?: boolean | null
    saldos?: saldosUncheckedCreateNestedManyWithoutSociosInput
  }

  export type sociosCreateOrConnectWithoutInscripcionesInput = {
    where: sociosWhereUniqueInput
    create: XOR<sociosCreateWithoutInscripcionesInput, sociosUncheckedCreateWithoutInscripcionesInput>
  }

  export type actividadesUpsertWithoutInscripcionesInput = {
    update: XOR<actividadesUpdateWithoutInscripcionesInput, actividadesUncheckedUpdateWithoutInscripcionesInput>
    create: XOR<actividadesCreateWithoutInscripcionesInput, actividadesUncheckedCreateWithoutInscripcionesInput>
    where?: actividadesWhereInput
  }

  export type actividadesUpdateToOneWithWhereWithoutInscripcionesInput = {
    where?: actividadesWhereInput
    data: XOR<actividadesUpdateWithoutInscripcionesInput, actividadesUncheckedUpdateWithoutInscripcionesInput>
  }

  export type actividadesUpdateWithoutInscripcionesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    activa?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type actividadesUncheckedUpdateWithoutInscripcionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    activa?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type sociosUpsertWithoutInscripcionesInput = {
    update: XOR<sociosUpdateWithoutInscripcionesInput, sociosUncheckedUpdateWithoutInscripcionesInput>
    create: XOR<sociosCreateWithoutInscripcionesInput, sociosUncheckedCreateWithoutInscripcionesInput>
    where?: sociosWhereInput
  }

  export type sociosUpdateToOneWithWhereWithoutInscripcionesInput = {
    where?: sociosWhereInput
    data: XOR<sociosUpdateWithoutInscripcionesInput, sociosUncheckedUpdateWithoutInscripcionesInput>
  }

  export type sociosUpdateWithoutInscripcionesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    saldos?: saldosUpdateManyWithoutSociosNestedInput
    familias?: familiasUpdateOneWithoutSociosNestedInput
  }

  export type sociosUncheckedUpdateWithoutInscripcionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_familia?: NullableIntFieldUpdateOperationsInput | number | null
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    saldos?: saldosUncheckedUpdateManyWithoutSociosNestedInput
  }

  export type sociosCreateWithoutSaldosInput = {
    nombre: string
    apellido: string
    dni: string
    fecha_nacimiento?: Date | string | null
    celular?: string | null
    activo?: boolean | null
    inscripciones?: inscripcionesCreateNestedManyWithoutSociosInput
    familias?: familiasCreateNestedOneWithoutSociosInput
  }

  export type sociosUncheckedCreateWithoutSaldosInput = {
    id?: number
    id_familia?: number | null
    nombre: string
    apellido: string
    dni: string
    fecha_nacimiento?: Date | string | null
    celular?: string | null
    activo?: boolean | null
    inscripciones?: inscripcionesUncheckedCreateNestedManyWithoutSociosInput
  }

  export type sociosCreateOrConnectWithoutSaldosInput = {
    where: sociosWhereUniqueInput
    create: XOR<sociosCreateWithoutSaldosInput, sociosUncheckedCreateWithoutSaldosInput>
  }

  export type sociosUpsertWithoutSaldosInput = {
    update: XOR<sociosUpdateWithoutSaldosInput, sociosUncheckedUpdateWithoutSaldosInput>
    create: XOR<sociosCreateWithoutSaldosInput, sociosUncheckedCreateWithoutSaldosInput>
    where?: sociosWhereInput
  }

  export type sociosUpdateToOneWithWhereWithoutSaldosInput = {
    where?: sociosWhereInput
    data: XOR<sociosUpdateWithoutSaldosInput, sociosUncheckedUpdateWithoutSaldosInput>
  }

  export type sociosUpdateWithoutSaldosInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    inscripciones?: inscripcionesUpdateManyWithoutSociosNestedInput
    familias?: familiasUpdateOneWithoutSociosNestedInput
  }

  export type sociosUncheckedUpdateWithoutSaldosInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_familia?: NullableIntFieldUpdateOperationsInput | number | null
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    inscripciones?: inscripcionesUncheckedUpdateManyWithoutSociosNestedInput
  }

  export type inscripcionesCreateWithoutSociosInput = {
    fecha_inscripcion?: Date | string
    pagado?: boolean | null
    fecha_pago?: Date | string | null
    actividades?: actividadesCreateNestedOneWithoutInscripcionesInput
  }

  export type inscripcionesUncheckedCreateWithoutSociosInput = {
    id?: number
    id_actividad?: number | null
    fecha_inscripcion?: Date | string
    pagado?: boolean | null
    fecha_pago?: Date | string | null
  }

  export type inscripcionesCreateOrConnectWithoutSociosInput = {
    where: inscripcionesWhereUniqueInput
    create: XOR<inscripcionesCreateWithoutSociosInput, inscripcionesUncheckedCreateWithoutSociosInput>
  }

  export type inscripcionesCreateManySociosInputEnvelope = {
    data: inscripcionesCreateManySociosInput | inscripcionesCreateManySociosInput[]
  }

  export type saldosCreateWithoutSociosInput = {
    descripcion: string
    monto: Decimal | DecimalJsLike | number | string
    fecha?: Date | string
    tipo_movimiento?: string | null
  }

  export type saldosUncheckedCreateWithoutSociosInput = {
    id?: number
    descripcion: string
    monto: Decimal | DecimalJsLike | number | string
    fecha?: Date | string
    tipo_movimiento?: string | null
  }

  export type saldosCreateOrConnectWithoutSociosInput = {
    where: saldosWhereUniqueInput
    create: XOR<saldosCreateWithoutSociosInput, saldosUncheckedCreateWithoutSociosInput>
  }

  export type saldosCreateManySociosInputEnvelope = {
    data: saldosCreateManySociosInput | saldosCreateManySociosInput[]
  }

  export type familiasCreateWithoutSociosInput = {
    nombre_familia: string
    fecha_alta?: Date | string
  }

  export type familiasUncheckedCreateWithoutSociosInput = {
    id?: number
    nombre_familia: string
    fecha_alta?: Date | string
  }

  export type familiasCreateOrConnectWithoutSociosInput = {
    where: familiasWhereUniqueInput
    create: XOR<familiasCreateWithoutSociosInput, familiasUncheckedCreateWithoutSociosInput>
  }

  export type inscripcionesUpsertWithWhereUniqueWithoutSociosInput = {
    where: inscripcionesWhereUniqueInput
    update: XOR<inscripcionesUpdateWithoutSociosInput, inscripcionesUncheckedUpdateWithoutSociosInput>
    create: XOR<inscripcionesCreateWithoutSociosInput, inscripcionesUncheckedCreateWithoutSociosInput>
  }

  export type inscripcionesUpdateWithWhereUniqueWithoutSociosInput = {
    where: inscripcionesWhereUniqueInput
    data: XOR<inscripcionesUpdateWithoutSociosInput, inscripcionesUncheckedUpdateWithoutSociosInput>
  }

  export type inscripcionesUpdateManyWithWhereWithoutSociosInput = {
    where: inscripcionesScalarWhereInput
    data: XOR<inscripcionesUpdateManyMutationInput, inscripcionesUncheckedUpdateManyWithoutSociosInput>
  }

  export type saldosUpsertWithWhereUniqueWithoutSociosInput = {
    where: saldosWhereUniqueInput
    update: XOR<saldosUpdateWithoutSociosInput, saldosUncheckedUpdateWithoutSociosInput>
    create: XOR<saldosCreateWithoutSociosInput, saldosUncheckedCreateWithoutSociosInput>
  }

  export type saldosUpdateWithWhereUniqueWithoutSociosInput = {
    where: saldosWhereUniqueInput
    data: XOR<saldosUpdateWithoutSociosInput, saldosUncheckedUpdateWithoutSociosInput>
  }

  export type saldosUpdateManyWithWhereWithoutSociosInput = {
    where: saldosScalarWhereInput
    data: XOR<saldosUpdateManyMutationInput, saldosUncheckedUpdateManyWithoutSociosInput>
  }

  export type saldosScalarWhereInput = {
    AND?: saldosScalarWhereInput | saldosScalarWhereInput[]
    OR?: saldosScalarWhereInput[]
    NOT?: saldosScalarWhereInput | saldosScalarWhereInput[]
    id?: IntFilter<"saldos"> | number
    id_socio?: IntNullableFilter<"saldos"> | number | null
    descripcion?: StringFilter<"saldos"> | string
    monto?: DecimalFilter<"saldos"> | Decimal | DecimalJsLike | number | string
    fecha?: DateTimeFilter<"saldos"> | Date | string
    tipo_movimiento?: StringNullableFilter<"saldos"> | string | null
  }

  export type familiasUpsertWithoutSociosInput = {
    update: XOR<familiasUpdateWithoutSociosInput, familiasUncheckedUpdateWithoutSociosInput>
    create: XOR<familiasCreateWithoutSociosInput, familiasUncheckedCreateWithoutSociosInput>
    where?: familiasWhereInput
  }

  export type familiasUpdateToOneWithWhereWithoutSociosInput = {
    where?: familiasWhereInput
    data: XOR<familiasUpdateWithoutSociosInput, familiasUncheckedUpdateWithoutSociosInput>
  }

  export type familiasUpdateWithoutSociosInput = {
    nombre_familia?: StringFieldUpdateOperationsInput | string
    fecha_alta?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type familiasUncheckedUpdateWithoutSociosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre_familia?: StringFieldUpdateOperationsInput | string
    fecha_alta?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type inscripcionesCreateManyActividadesInput = {
    id_socio?: number | null
    fecha_inscripcion?: Date | string
    pagado?: boolean | null
    fecha_pago?: Date | string | null
  }

  export type inscripcionesUpdateWithoutActividadesInput = {
    fecha_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    pagado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    fecha_pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    socios?: sociosUpdateOneWithoutInscripcionesNestedInput
  }

  export type inscripcionesUncheckedUpdateWithoutActividadesInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_socio?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    pagado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    fecha_pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type inscripcionesUncheckedUpdateManyWithoutActividadesInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_socio?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    pagado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    fecha_pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sociosCreateManyFamiliasInput = {
    nombre: string
    apellido: string
    dni: string
    fecha_nacimiento?: Date | string | null
    celular?: string | null
    activo?: boolean | null
  }

  export type sociosUpdateWithoutFamiliasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    inscripciones?: inscripcionesUpdateManyWithoutSociosNestedInput
    saldos?: saldosUpdateManyWithoutSociosNestedInput
  }

  export type sociosUncheckedUpdateWithoutFamiliasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
    inscripciones?: inscripcionesUncheckedUpdateManyWithoutSociosNestedInput
    saldos?: saldosUncheckedUpdateManyWithoutSociosNestedInput
  }

  export type sociosUncheckedUpdateManyWithoutFamiliasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    fecha_nacimiento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    celular?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type inscripcionesCreateManySociosInput = {
    id_actividad?: number | null
    fecha_inscripcion?: Date | string
    pagado?: boolean | null
    fecha_pago?: Date | string | null
  }

  export type saldosCreateManySociosInput = {
    descripcion: string
    monto: Decimal | DecimalJsLike | number | string
    fecha?: Date | string
    tipo_movimiento?: string | null
  }

  export type inscripcionesUpdateWithoutSociosInput = {
    fecha_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    pagado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    fecha_pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actividades?: actividadesUpdateOneWithoutInscripcionesNestedInput
  }

  export type inscripcionesUncheckedUpdateWithoutSociosInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_actividad?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    pagado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    fecha_pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type inscripcionesUncheckedUpdateManyWithoutSociosInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_actividad?: NullableIntFieldUpdateOperationsInput | number | null
    fecha_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    pagado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    fecha_pago?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type saldosUpdateWithoutSociosInput = {
    descripcion?: StringFieldUpdateOperationsInput | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo_movimiento?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type saldosUncheckedUpdateWithoutSociosInput = {
    id?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo_movimiento?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type saldosUncheckedUpdateManyWithoutSociosInput = {
    id?: IntFieldUpdateOperationsInput | number
    descripcion?: StringFieldUpdateOperationsInput | string
    monto?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    tipo_movimiento?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}