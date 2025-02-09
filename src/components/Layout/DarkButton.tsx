import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import React from 'react';
import { IconSun, IconMoonStars } from '@tabler/icons-react';

const DarkButtom = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <ActionIcon
      variant="outline"
      color={dark ? 'yellow' : 'blue'}
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
    >
      {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
    </ActionIcon>
  );
};

export default DarkButtom;
