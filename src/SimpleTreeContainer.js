/* eslint no-console:0 */
/* eslint no-alert:0 */
/* eslint jsx-a11y/no-noninteractive-element-interactions:0 */
import React from "react";
import Tree, { TreeNode } from "rc-tree";

import "./rc-tree.css";

const onEnterActive = node => {
  return { height: node.scrollHeight };
};

const motion = {
  motionName: "node-motion",
  motionAppear: false,
  onEnterActive,
  onLeaveStart: node => ({ height: node.offsetHeight })
};
const treeData = [
  {
    key: "0-0",
    title: "parent 1",
    checkable: true,
    children: [
      {
        key: "0-0-0",
        checkable: false,
        title: "parent 1-1",
        children: [{ key: "0-0-0-0", checkable: false, title: "parent 1-1-0" }]
      },
      {
        key: "0-0-1",
        title: "parent 1-2",
        checkable: false,
        children: [
          { key: "0-0-1-0", title: "parent 1-2-0", checkable: false },
          { key: "0-0-1-1", title: "parent 1-2-1", checkable: false },
          { key: "0-0-1-2", title: "parent 1-2-1", checkable: false },
          { key: "0-0-1-3", title: "parent 1-2-1", checkable: false },
          { key: "0-0-1-4", title: "parent 1-2-1", checkable: false },
          { key: "0-0-1-5", title: "parent 1-2-1", checkable: false },
          { key: "0-0-1-6", title: "parent 1-2-1", checkable: false }
        ]
      }
    ]
  }
];

class SimpleTreeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultExpandedKeys: ["0-0-1"],
      selectedKeys: []
    };
  }

  onSelect = (
    selectedKeys,
    { selected, selectedNodes, node, event, nativeEvent }
  ) => {
    console.log("Demo:onSelect", selectedKeys);
    console.log({ selected, selectedNodes, node, event, nativeEvent });
    this.setState({ ...this.state, selectedKeys });
  };

  render() {
    return (
      <div className="dd-demo-container">
        <Tree
          motion={motion}
          showLine
          checkStrictly
          checkable
          showIcon={false}
          treeData={treeData}
          defaultExpandedKeys={this.state.defaultExpandedKeys}
          selectedKeys={this.state.selectedKeys}
          onSelect={this.onSelect}
          autoExpandParent
        />
      </div>
    );
  }
}

export default SimpleTreeContainer;
