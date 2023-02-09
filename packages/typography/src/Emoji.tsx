import { ForwardedRef, forwardRef } from 'react';

import { BaseStyleProps, useStyleProps } from '@voussoir/style';
import { DOMProps } from '@voussoir/types';
import { filterDOMProps } from '@voussoir/utils';

export type EmojiProps = {
  /** Label used to describe the symbol that will be announced to screen readers. */
  label?: string;
  /** Emoji symbol. */
  symbol: string;
} & BaseStyleProps &
  DOMProps;

/**
 * A utility component for displaying emoji characters accessibly. Emojis can
 * add playfulness to your interface, but require formatting to ensure that they
 * are accessible for all users.
 */
export const Emoji = forwardRef(function Emoji(
  props: EmojiProps,
  forwardedRef: ForwardedRef<HTMLSpanElement>
) {
  const { label, symbol, ...otherProps } = props;
  const styleProps = useStyleProps(otherProps);
  return (
    <span
      aria-hidden={label ? undefined : true}
      aria-label={label}
      ref={forwardedRef}
      role="img"
      {...styleProps}
      {...filterDOMProps(otherProps)}
    >
      {symbol}
    </span>
  );
});