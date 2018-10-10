export class Result {
  private constructor(
    private readonly code: number,
    private readonly msg: string,
    private readonly data: any,
  ) {}

  static success(data: any, code = 0, msg = 'success'): Result {
    return new Result(code, msg, data);
  }

  static error(code = 500, msg = '未知错误，请联系管理员!', data = ''): Result {
    return new Result(code, msg, data);
  }
}
