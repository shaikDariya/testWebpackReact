type HistoryType = {
  userId: number | undefined;
  action: string;
  time : number
};

let history: HistoryType[] = [];


export const historyService = {
  getHistory: function(id: number | undefined) {
    return history.filter((his: HistoryType) => {
      return his.userId === id
    }) || [];
  },
  setHistory: function (historyList: readonly HistoryType[]){
    history = [...historyList];
  },
  addHistory: (historyObj: HistoryType) => {
    history = [...history, historyObj];
  },
  getAllHistory: () =>{
    return history;
  },
};
