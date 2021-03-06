/* eslint-disable max-len */
export interface Biba {
  size: number;
  username: string;
  outdated: boolean;
  userId: number;
}

export interface DailyBibaResponse {
  message: string;
  terrorists: Biba[];
}

export const MAX_BIBA_SIZE = 35;
export const TERRORISCTIC_BIBA_SIZE = 500;
export const POSITIVE_BIBA = 'Так держать!';
export const NEGATIVE_BIBA = 'Чет ты спустил малясь...';
export const SAME_BIBA = 'Стабильность - признак мастерства.';
export const NO_STICKER_LIST_DATA = 'Для этой конференции ещё не создан ни 1 стикер пак.\n\nТы можешь создать его с помощью реплая на сообщение';
export const NO_BIBA_TABLE_DATA = 'Никто не мерял бибу(((\n\nТы можешь померять бибу с помощью команды /biba';
export const NO_BIBA_MEASURED = 'Вчера никто не мерял бибу(((\n\nТы можешь померять бибу с помощью команды /biba\n'
                              + 'Если вдруг тебе нужно отключить ежедневную бибу((((((, то используй команду /config';
