class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

const getTotal = (list: ListNode | null): bigint => {
  if (!list){
    return 0n;
  } else if (list.next === null){
    return BigInt(list.val);
  } else {
    return BigInt(list.val) + getTotal(list.next) * 10n;
  }
}

const buildList = (total: bigint): ListNode => {
  if (total < 10n){
    return new ListNode(Number(total));
  }

  return new ListNode(Number(total % 10n), buildList(total / 10n));
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  return buildList(getTotal(l1) + getTotal(l2));
};