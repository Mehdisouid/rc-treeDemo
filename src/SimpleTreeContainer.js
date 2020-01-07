/* eslint no-console:0 */
/* eslint no-alert:0 */
/* eslint jsx-a11y/no-noninteractive-element-interactions:0 */
import React from "react";
import Tree from "rc-tree";
import classNames from "classnames";

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
    icon: <input type="checkbox" className="customize-icon" />,
    children: [
      {
        key: "0-0-0",

        title: "parent 1-1",
        children: [{ key: "0-0-0-0", title: "parent 1-1-0" }]
      },
      {
        key: "0-0-1",
        title: "parent 1-2",

        children: [
          { key: "0-0-1-0", title: "parent 1-2-0" },
          { key: "0-0-1-1", title: "parent 1-2-1" },
          { key: "0-0-1-2", title: "parent 1-2-1" }
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
    const switcher = obj => {
      if (obj.isLeaf) {
        return;
      }
      return (
        <span className="rc-tree-switcher_open_operation">
          {obj.expanded ? "-" : "+"}
        </span>
      );
    };
    const Icon = ({ selected }) => (
      <span
        className={classNames("customize-icon", selected && "selected-icon")}
      />
    );
    return (
      <div className="dd-demo-container">
        <Tree
          motion={motion}
          showLine
          checkStrictly
          selectable={false}
          showIcon
          treeData={treeData}
          defaultExpandedKeys={this.state.defaultExpandedKeys}
          autoExpandParent
          switcherIcon={switcher}
        />
      </div>
    );
  }
}

export default SimpleTreeContainer;
