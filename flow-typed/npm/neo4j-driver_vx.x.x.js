// flow-typed signature: 1e3acc237d65e329f2969da7f5c918ba
// flow-typed version: <<STUB>>/neo4j-driver_v^1.1.0/flow_v0.38.0

/**
 * This is an autogenerated libdef stub for:
 *
 *   'neo4j-driver'
 *
 * Fill this stub out by replacing all the `any` types.
 *
 * Once filled out, we encourage you to share your work with the
 * community by sending a pull request to:
 * https://github.com/flowtype/flow-typed
 */

 type NeoInt = {
   toInt(): number,
   toString(): string
 }

type record = {
  keys: Array<string>,
  length: number,
  get(key: string | number): any,
  forEach(visitor: Function): void,
}

type authToken = {
  scheme: string,
  principal: string,
  credentials: string,
}

type driver = {
  session(): session,
  close(): void,
}

type transaction = {
  run(statement: any, parameters: any): any,
  commit(): any,
  rollback(): any,
}

type session = {
  run(statement: string, parameters?: {}): Promise<{ records: Array<record> }>,
  beginTransaction(): transaction,
  close(cb?: () => void): void,
}

type v1 = {
  driver(url: string, authToken: authToken, config?: {}): driver,
  auth: {
    basic(username: string, password: string): authToken,
  }
}

declare module 'neo4j-driver' {
  declare module.exports: {
    v1: v1
  };
}
