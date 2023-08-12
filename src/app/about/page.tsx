import React from 'react';
import type { Metadata } from 'next';

import { Section } from '@/components/ui/Section/Section';

export const metadata: Metadata = {
  title: 'MarketShop - About',
  description: 'The largest catalog of goods in MarketShop',
};

const AboutPage = () => {
  return (
    <Section title="About Us">
      <p className="text-base leading-9 text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ornare arcu odio ut
        sem nulla pharetra diam. Semper eget duis at tellus at. Lectus nulla at
        volutpat diam ut venenatis. Lacus laoreet non curabitur gravida arcu ac
        tortor dignissim. Sit amet nulla facilisi morbi tempus iaculis urna id
        volutpat. Feugiat scelerisque varius morbi enim nunc faucibus a
        pellentesque. Egestas pretium aenean pharetra magna ac. Egestas maecenas
        pharetra convallis posuere morbi. Vitae justo eget magna fermentum
        iaculis eu non diam phasellus. Quam quisque id diam vel. Risus quis
        varius quam quisque id diam. Facilisi nullam vehicula ipsum a. Amet
        tellus cras adipiscing enim eu turpis egestas pretium aenean. Pulvinar
        etiam non quam lacus suspendisse faucibus. Sed sed risus pretium quam.
        Arcu cursus vitae congue mauris rhoncus. Id volutpat lacus laoreet non
        curabitur gravida arcu ac tortor. Pulvinar pellentesque habitant morbi
        tristique senectus et. Eu facilisis sed odio morbi. Auctor urna nunc id
        cursus metus aliquam eleifend. Id diam maecenas ultricies mi eget
        mauris. Mauris a diam maecenas sed enim ut sem. Sodales ut etiam sit
        amet nisl purus in mollis. Leo integer malesuada nunc vel risus commodo
        viverra maecenas. Dignissim cras tincidunt lobortis feugiat vivamus at.
        Aliquam eleifend mi in nulla posuere sollicitudin aliquam. Varius vel
        pharetra vel turpis nunc eget lorem dolor sed. Sapien faucibus et
        molestie ac feugiat sed.
      </p>
    </Section>
  );
};

export default AboutPage;
