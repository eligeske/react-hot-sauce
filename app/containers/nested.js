export function getChildByKey(childKey) {
  return this.props.children.find(item => item.key === childKey);
}

export const arb = '';
