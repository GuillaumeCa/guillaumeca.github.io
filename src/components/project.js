import React from "react"

export function Project({
  data: {
    type,
    anchorTag,
    image,
    title,
    subtitle,
    description,
    technologies,
    url,
    source,
  },
}) {
  return (
    <div className="flex spacer">
      <div className="fbox side-img">
        <img src={image} alt={anchorTag + "-capture"} />
      </div>
      <div className="fbox">
        <div className="box">
          <h1>{title}</h1>
          <h3>{subtitle}</h3>
          <p dangerouslySetInnerHTML={{ __html: description }} />
          <div className="used-techno">
            {technologies.map(t => (
              <div
                className="square background-cnt"
                style={{ backgroundImage: `url('svg/${t}.svg')` }}
              />
            ))}
          </div>
        </div>
        <a
          href={source.url}
          className="box-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="source-link">
            <img src="svg/github.svg" alt="github-icon" />
            <span>SOURCE</span>
          </div>
        </a>
      </div>
    </div>
  )
}
