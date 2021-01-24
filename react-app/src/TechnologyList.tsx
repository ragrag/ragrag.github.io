import React from "react";

type Props = {
  label: string;
  icons: {
    iconElement: any;
    iconLabel: string;
  }[];
};
export default function TechnologyList({ label, icons }: Props) {
  return (
    <div>
      <h6
        className="is-size-6"
        style={{ marginBottom: "10px", marginTop: "10px" }}
      >
        {label}
      </h6>
      <div className="columns is-centered">
        {icons.map((icon, idx) => {
          return (
            <div className="column has-text-centered is-2" key={`label-${idx}`}>
              {icon.iconElement}
              <p style={{ fontSize: 8 }}>{icon.iconLabel}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
